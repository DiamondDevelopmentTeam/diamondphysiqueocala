import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Brand } from './Brand';
import { navItems } from '../data';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.5 8H17V4.2c-.4-.1-1.8-.2-3.4-.2C10.3 4 8 6 8 9.7V13H4v4h4v7h4.9v-7h3.4l.7-4h-4.1V10c0-1.2.3-2 1.6-2Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.7" r="1" className="icon-fill" />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const bookingItem = navItems.find(
    (item) => item.to === '/book-your-session',
  );

  const primaryNavigation = navItems.filter(
    (item) => item.to !== '/book-your-session',
  );

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  useEffect(() => {
    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', closeMenuOnEscape);

    return () => {
      window.removeEventListener('keydown', closeMenuOnEscape);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="header-accent" />

      <div className="header-utility">
        <div className="shell header-utility__inner">
          <p>Private Personal Training in Ocala, Florida</p>

          <div className="header-socials">
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
      </div>

      <div className="header-main">
        <div className="shell header-layout">
          <Brand className="header-logo" />

          <nav className="desktop-navigation" aria-label="Primary navigation">
            {primaryNavigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `desktop-navigation__link ${
                    isActive ? 'is-active' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            {bookingItem && (
              <NavLink
                to={bookingItem.to}
                className={({ isActive }) =>
                  `header-booking-button ${
                    isActive ? 'is-active' : ''
                  }`
                }
              >
                Book a Session
              </NavLink>
            )}

            <button
              type="button"
              className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
              aria-label={
                menuOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-navigation ${
          menuOpen ? 'is-open' : ''
        }`}
        aria-label="Mobile navigation"
      >
        <div className="shell mobile-navigation__inner">
          {primaryNavigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `mobile-navigation__link ${
                  isActive ? 'is-active' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {bookingItem && (
            <NavLink
              to={bookingItem.to}
              className="mobile-navigation__booking"
            >
              Book Your Session
            </NavLink>
          )}

          <div className="mobile-navigation__socials">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}