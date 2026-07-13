import 'dotenv/config';
import cors from 'cors';
import express, { type NextFunction, type Request, type Response } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import nodemailer from 'nodemailer';
import { appendFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { z } from 'zod';

const app = express();
const port = Number(process.env.PORT ?? 4000);
const __dirname = dirname(fileURLToPath(import.meta.url));
const dataFile = resolve(__dirname, '../data/submissions.jsonl');

app.disable('x-powered-by');
app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN?.split(',').map((origin) => origin.trim()) ?? ['http://localhost:5173'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  })
);
app.use(express.json({ limit: '32kb' }));

const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { message: 'Too many requests. Please wait a few minutes and try again.' }
});

const commonFields = {
  name: z.string().trim().min(2).max(120),
  email: z.email().max(254),
  phone: z.string().trim().max(40).optional().default(''),
  message: z.string().trim().max(2000).optional().default(''),
  website: z.string().max(0).optional().default('')
};

const bookingSchema = z.object({
  ...commonFields,
  phone: z.string().trim().min(7).max(40),
  goal: z.enum(['Weight Loss', 'Muscle Gain', 'General Fitness', 'Endurance', 'Flexibility']),
  preferredTime: z.enum(['Morning', 'Afternoon', 'Evening']),
  experience: z.enum(['Beginner', 'Intermediate', 'Advanced'])
});

const contactSchema = z.object({
  ...commonFields,
  message: z.string().trim().min(10).max(2000),
  subject: z.string().trim().max(160).optional().default('Website inquiry')
});

type Submission = {
  type: 'booking' | 'contact';
  receivedAt: string;
  ip: string | undefined;
  payload: Record<string, string>;
};

function cleanForText(value: unknown): string {
  return String(value ?? '').replace(/[<>]/g, '').trim();
}

async function persistSubmission(submission: Submission): Promise<void> {
  await mkdir(dirname(dataFile), { recursive: true });
  await appendFile(dataFile, `${JSON.stringify(submission)}\n`, 'utf8');
}

async function sendSubmissionEmail(submission: Submission): Promise<void> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;

  if (!host || !user || !pass || !from) return;

  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user, pass }
  });

  const lines = Object.entries(submission.payload)
    .filter(([key]) => key !== 'website')
    .map(([key, value]) => `${key}: ${cleanForText(value)}`)
    .join('\n');

  await transporter.sendMail({
    from,
    to: process.env.LEAD_RECIPIENT ?? 'Matthew@DiamondPhysiqueOcala.com',
    replyTo: submission.payload.email,
    subject: submission.type === 'booking' ? 'New Diamond Physique session request' : 'New Diamond Physique contact message',
    text: `${lines}\n\nReceived: ${submission.receivedAt}`
  });
}

async function acceptSubmission(
  req: Request,
  res: Response,
  type: Submission['type'],
  payload: Record<string, string>
): Promise<void> {
  const submission: Submission = {
    type,
    receivedAt: new Date().toISOString(),
    ip: req.ip,
    payload
  };

  await persistSubmission(submission);

  try {
    await sendSubmissionEmail(submission);
  } catch (error) {
    console.error('SMTP forwarding failed:', error instanceof Error ? error.message : 'Unknown mail error');
  }

  res.status(202).json({ message: 'Submission accepted.' });
}

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'diamond-physique-api' });
});

app.post('/api/book-session', formLimiter, async (req, res, next) => {
  try {
    const parsed = bookingSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ message: 'Please check the form and try again.' });
      return;
    }

    await acceptSubmission(req, res, 'booking', parsed.data);
  } catch (error) {
    next(error);
  }
});

app.post('/api/contact', formLimiter, async (req, res, next) => {
  try {
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ message: 'Please check the form and try again.' });
      return;
    }

    await acceptSubmission(req, res, 'contact', parsed.data);
  } catch (error) {
    next(error);
  }
});

app.use((_req, res) => {
  res.status(404).json({ message: 'Not found.' });
});

app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Unhandled server error:', error instanceof Error ? error.message : error);
  res.status(500).json({ message: 'Something went wrong. Please try again.' });
});

app.listen(port, () => {
  console.log(`Diamond Physique API listening on http://localhost:${port}`);
});
