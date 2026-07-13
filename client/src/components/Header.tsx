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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  const left = navItems.slice(0, 3);
  const right = navItems.slice(3);

  const renderLink = (item: (typeof navItems)[number]) => (
    <NavLink
      key={item.to}
      to={item.to}
      className={({ isActive }) => `site-nav__link ${isActive ? 'is-active' : ''}`}
      end={item.to === '/'}
    >
      {item.label}
    </NavLink>
  );

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="social-strip">
        <div className="shell social-strip__inner">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </div>
      </div>

      <div className="header-main">
        <div className="shell header-main__inner">
          <nav className="site-nav site-nav--left" aria-label="Primary navigation">
            {left.map(renderLink)}
          </nav>

          <Brand className="header-brand" />

          <nav className="site-nav site-nav--right" aria-label="Secondary navigation">
            {right.map(renderLink)}
          </nav>

          <button
            className={`menu-toggle ${open ? 'is-open' : ''}`}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-label="Mobile navigation">
        <div className="shell mobile-menu__inner">{navItems.map(renderLink)}</div>
      </nav>
    </header>
  );
}
