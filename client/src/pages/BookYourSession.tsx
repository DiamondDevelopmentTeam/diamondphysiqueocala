import { type ChangeEvent, type FormEvent, useState } from 'react';
import training from '../assets/images/training.png';
import { FormStatus } from '../components/FormStatus';
import { PageHero } from '../components/PageHero';
import { contactDetails } from '../data';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type BookingForm = {
  name: string;
  phone: string;
  email: string;
  goal: string;
  preferredTime: string;
  experience: string;
  message: string;
  website: string;
};

const initialForm: BookingForm = {
  name: '',
  phone: '',
  email: '',
  goal: '',
  preferredTime: '',
  experience: '',
  message: '',
  website: ''
};

export function BookYourSession() {
  const [form, setForm] = useState<BookingForm>(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof BookingForm, string>>>({});

  const update = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof BookingForm, string>> = {};
    if (form.name.trim().length < 2) next.name = 'Please enter your full name.';
    if (!/^\+?[\d\s().-]{7,20}$/.test(form.phone.trim())) next.phone = 'Please enter a valid phone number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Please enter a valid email address.';
    if (!form.goal) next.goal = 'Choose a fitness goal.';
    if (!form.preferredTime) next.preferredTime = 'Choose a preferred training time.';
    if (!form.experience) next.experience = 'Choose your experience level.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    const apiBase = import.meta.env.VITE_API_URL?.replace(/\/$/, '') ?? '';

    try {
      const response = await fetch(`${apiBase}/api/book-session`, {
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
        image={training}
        position="center 35%"
        eyebrow="Complimentary first session"
        title="Book Your Session"
        subtitle="Tell us a little about your goals and preferred schedule. Matthew will follow up to confirm your session."
      />

      <section className="section section--cream booking-section">
        <div className="shell booking-grid">
          <div className="booking-copy">
            <p className="eyebrow">Your first session includes</p>
            <h2>One Hour to Understand Where You Are and Where You Want to Go</h2>
            <ul className="booking-benefits">
              <li><span>01</span>Fitness goals and training history</li>
              <li><span>02</span>Mobility and strength evaluation</li>
              <li><span>03</span>Discussion of injuries or limitations</li>
              <li><span>04</span>Guided introductory workout</li>
              <li><span>05</span>Personalized next-step recommendations</li>
            </ul>
            <p className="booking-direct-contact">
              Prefer to contact Matthew directly?<br />
              <a href={`tel:${contactDetails.phoneHref}`}>{contactDetails.phoneDisplay}</a><br />
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </p>
          </div>

          <form className="form-card" onSubmit={submit} noValidate>
            <div className="form-card__heading">
              <p className="eyebrow">Reserve your complimentary session</p>
              <h2>Let’s Get Started</h2>
            </div>

            <div className="form-grid">
              <label>
                Full name <span aria-hidden="true">*</span>
                <input name="name" value={form.name} onChange={update} autoComplete="name" aria-invalid={Boolean(errors.name)} />
                {errors.name && <small>{errors.name}</small>}
              </label>

              <label>
                Phone number <span aria-hidden="true">*</span>
                <input name="phone" value={form.phone} onChange={update} autoComplete="tel" inputMode="tel" aria-invalid={Boolean(errors.phone)} />
                {errors.phone && <small>{errors.phone}</small>}
              </label>

              <label className="form-grid__full">
                Email <span aria-hidden="true">*</span>
                <input name="email" type="email" value={form.email} onChange={update} autoComplete="email" aria-invalid={Boolean(errors.email)} />
                {errors.email && <small>{errors.email}</small>}
              </label>

              <label>
                Primary fitness goal <span aria-hidden="true">*</span>
                <select name="goal" value={form.goal} onChange={update} aria-invalid={Boolean(errors.goal)}>
                  <option value="">Choose one</option>
                  <option>Weight Loss</option>
                  <option>Muscle Gain</option>
                  <option>General Fitness</option>
                  <option>Endurance</option>
                  <option>Flexibility</option>
                </select>
                {errors.goal && <small>{errors.goal}</small>}
              </label>

              <label>
                Preferred training time <span aria-hidden="true">*</span>
                <select name="preferredTime" value={form.preferredTime} onChange={update} aria-invalid={Boolean(errors.preferredTime)}>
                  <option value="">Choose one</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
                {errors.preferredTime && <small>{errors.preferredTime}</small>}
              </label>

              <label className="form-grid__full">
                Training experience <span aria-hidden="true">*</span>
                <select name="experience" value={form.experience} onChange={update} aria-invalid={Boolean(errors.experience)}>
                  <option value="">Choose one</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
                {errors.experience && <small>{errors.experience}</small>}
              </label>

              <label className="form-grid__full">
                Comments or questions
                <textarea name="message" rows={5} value={form.message} onChange={update} maxLength={2000} />
              </label>

              <label className="honeypot" aria-hidden="true">
                Website
                <input name="website" value={form.website} onChange={update} tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <button className="button button--gold button--full" type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Request My Complimentary Session'}
            </button>
            <FormStatus status={status} successMessage="Your session request was received. Matthew will contact you to confirm availability." />
          </form>
        </div>
      </section>
    </main>
  );
}
