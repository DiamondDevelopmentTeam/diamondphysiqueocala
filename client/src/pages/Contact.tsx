import { type ChangeEvent, type FormEvent, useState } from 'react';
import entrance from '../assets/images/entrance.png';
import hero from '../assets/images/cover.png';
import { FormStatus } from '../components/FormStatus';
import { PageHero } from '../components/PageHero';
import { contactDetails } from '../data';

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string;
};

const initialForm: ContactForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  website: ''
};

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const update = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setStatus('submitting');

    const apiBase = import.meta.env.VITE_API_URL?.replace(/\/$/, '') ?? '';
    try {
      const response = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!response.ok) throw new Error('Submission failed');
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <main>
      <PageHero
        image={hero}
        eyebrow="Contact Diamond Physique Ocala"
        title="Let’s Talk About Your Goals"
        subtitle="Questions about training, scheduling or the complimentary first session? Send a message or contact Matthew directly."
      />

      <section className="section section--cream contact-section">
        <div className="shell contact-grid">
          <div className="contact-card">
            <img src={entrance} alt="Diamond Physique Ocala studio entrance" />
            <div className="contact-card__body">
              <p className="eyebrow">Visit the studio</p>
              <h2>Diamond Physique Ocala</h2>
              <address>
                {contactDetails.addressLine1}<br />
                {contactDetails.addressLine2}
              </address>
              <a href={`tel:${contactDetails.phoneHref}`}>{contactDetails.phoneDisplay}</a>
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              <a
                className="button button--dark"
                href="https://www.google.com/maps/search/?api=1&query=1020+SW+6th+Ave+Ocala+FL+34471"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>

          <form className="form-card" onSubmit={submit}>
            <div className="form-card__heading">
              <p className="eyebrow">Send a message</p>
              <h2>How Can We Help?</h2>
            </div>
            <div className="form-grid">
              <label>
                Name <span aria-hidden="true">*</span>
                <input name="name" value={form.name} onChange={update} required autoComplete="name" />
              </label>
              <label>
                Email <span aria-hidden="true">*</span>
                <input name="email" type="email" value={form.email} onChange={update} required autoComplete="email" />
              </label>
              <label>
                Phone
                <input name="phone" value={form.phone} onChange={update} autoComplete="tel" />
              </label>
              <label>
                Subject
                <input name="subject" value={form.subject} onChange={update} />
              </label>
              <label className="form-grid__full">
                Message <span aria-hidden="true">*</span>
                <textarea name="message" rows={7} value={form.message} onChange={update} required maxLength={2000} />
              </label>
              <label className="honeypot" aria-hidden="true">
                Website
                <input name="website" value={form.website} onChange={update} tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <button className="button button--gold button--full" type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
            <FormStatus status={status} />
          </form>
        </div>
      </section>
    </main>
  );
}
