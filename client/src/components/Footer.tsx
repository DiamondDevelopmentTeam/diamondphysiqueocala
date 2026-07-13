import { Link } from 'react-router-dom';
import diamondSalonLogo from '../assets/images/diamondSalonOcala.png';
import { Brand } from './Brand';
import { contactDetails, navItems } from '../data';

export function Footer() {
  const firstLinks = navItems.slice(0, 3);
  const secondLinks = navItems.slice(3);

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand-column">
          <Brand />
          <a
            href="https://diamondsalonocala.com/"
            target="_blank"
            rel="noreferrer"
            className="salon-logo-link"
            aria-label="Visit Diamond Salon Ocala"
          >
            <img src={diamondSalonLogo} alt="Diamond Salon Ocala" className="salon-logo" />
          </a>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <div>
            {firstLinks.map((item) => (
              <Link key={item.to} to={item.to}>{item.label}</Link>
            ))}
          </div>
          <div>
            {secondLinks.map((item) => (
              <Link key={item.to} to={item.to}>{item.label}</Link>
            ))}
          </div>
        </nav>

        <address className="footer-contact">
          <div>
            <span className="footer-contact__icon" aria-hidden="true">⌖</span>
            <span>
              <strong>Address</strong>
              {contactDetails.addressLine1}<br />
              {contactDetails.addressLine2}
            </span>
          </div>
          <div>
            <span className="footer-contact__icon" aria-hidden="true">☎</span>
            <span>
              <strong>Phone</strong>
              <a href={`tel:${contactDetails.phoneHref}`}>{contactDetails.phoneDisplay}</a>
            </span>
          </div>
          <div>
            <span className="footer-contact__icon" aria-hidden="true">✉</span>
            <span>
              <strong>Email</strong>
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </span>
          </div>
        </address>
      </div>

      <div className="shell footer-bottom">
        <span>Copyright © {new Date().getFullYear()} Diamond Physique Ocala. All Rights Reserved.</span>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
}
