import hero from '../assets/images/cover.png';
import { PageHero } from '../components/PageHero';
import { contactDetails } from '../data';

export function PrivacyPolicy() {
  return (
    <main>
      <PageHero image={hero} eyebrow="Diamond Physique Ocala" title="Privacy Policy" />
      <section className="section section--cream legal-page">
        <div className="shell legal-page__content">
          <p><strong>Last updated:</strong> July 13, 2026</p>
          <h2>Information We Collect</h2>
          <p>
            When you submit a booking or contact form, we may collect your name, email address, phone number, fitness goals,
            preferred training time and any message you choose to provide.
          </p>
          <h2>How We Use Information</h2>
          <p>
            Information is used to respond to inquiries, schedule sessions, provide requested services and communicate about
            your training request. We do not sell personal information.
          </p>
          <h2>Data Retention and Security</h2>
          <p>
            Reasonable administrative and technical safeguards are used to protect submitted information. Information is
            retained only as long as needed for business, legal or service purposes.
          </p>
          <h2>Third-Party Services</h2>
          <p>
            The website may use hosting, email delivery, analytics or mapping providers. Those providers may process limited
            information according to their own privacy practices.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
