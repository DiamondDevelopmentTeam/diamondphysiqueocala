import { Link } from 'react-router-dom';
import { Brand } from './Brand';
import diamondSalonLogo from '../assets/images/diamondSalonOcala.png';

const companyLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Meet the Trainer', to: '/meet-the-trainer' },
];

const visitorLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Book Your Session', to: '/book-your-session' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.5 8H17V4.2c-.4-.1-1.8-.2-3.4-.2C10.3 4 8 6 8 9.7V13H4v4h4v7h4.9v-7h3.4l.7-4h-4.1V10c0-1.2.3-2 1.6-2Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle cx="17.4" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="12"
        cy="9"
        r="2.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7.2 3.7 10 7.3 8.3 9.6c1.2 2.5 3.5 4.8 6 6l2.3-1.7 3.6 2.8c.4.3.5.8.3 1.2-.7 1.5-2.2 2.6-4 2.4C9.7 19.5 4.5 14.3 3.7 7.5c-.2-1.8.9-3.3 2.4-4 .4-.2.9-.1 1.1.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="m4 7 8 6 8-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-accent" />

      <section className="footer-cta" aria-labelledby="footer-cta-title">
        <div className="shell footer-cta__inner">
          <div className="footer-cta__content">
            <span className="footer-eyebrow">
              Your transformation starts here
            </span>

            <h2 id="footer-cta-title">
              Ready to build your strongest self?
            </h2>

            <p>
              Begin with a complimentary one-hour evaluation and personal
              training session.
            </p>
          </div>

          <Link to="/book-your-session" className="footer-cta__button">
            Book Your Complimentary Session
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <div className="footer-main">
        <div className="shell footer-grid">
          <div className="footer-brand-section">
            <Brand className="footer-brand" />
            <div className="footer-location__content">
            <img
              src={diamondSalonLogo}
              alt="Diamond Salon Ocala"
              loading="lazy"
            />

          </div>
            

            <p className="footer-description">
              Private, personalized training designed to help you improve
              strength, mobility, confidence, and overall wellness.
            </p>
            

            

            <div className="footer-socials">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Diamond Physique Ocala on Facebook"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Diamond Physique Ocala on Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="footer-navigation">
            <h3>Explore</h3>

            <nav aria-label="Footer company navigation">
              {companyLinks.map((item) => (
                <Link key={item.to} to={item.to}>
                  <span aria-hidden="true">›</span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-navigation">
            <h3>Get Started</h3>

            <nav aria-label="Footer visitor navigation">
              {visitorLinks.map((item) => (
                <Link key={item.to} to={item.to}>
                  <span aria-hidden="true">›</span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-contact">
            <h3>Visit the Studio</h3>

            <address>
              <a
                className="footer-contact__item"
                href="https://www.google.com/maps/search/?api=1&query=1020+SW+6th+Ave+Ocala+FL+34471"
                target="_blank"
                rel="noreferrer"
              >
                <span className="footer-contact__icon">
                  <LocationIcon />
                </span>

                <span>
                  <strong>Address</strong>
                  1020 SW 6th Ave.
                  <br />
                  Ocala, FL 34471
                </span>
              </a>

              <a
                className="footer-contact__item"
                href="tel:+13522865282"
              >
                <span className="footer-contact__icon">
                  <PhoneIcon />
                </span>

                <span>
                  <strong>Phone</strong>
                  352-286-5282
                </span>
              </a>

              <a
                className="footer-contact__item"
                href="mailto:Matthew@DiamondPhysiqueOcala.com"
              >
                <span className="footer-contact__icon">
                  <EmailIcon />
                </span>

                <span>
                  <strong>Email</strong>
                  Matthew@DiamondPhysiqueOcala.com
                </span>
              </a>
            </address>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="shell footer-bottom__inner">
          <p>
            © {currentYear} Diamond Physique Ocala. All rights reserved.
          </p>

          <div className="footer-bottom__links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}