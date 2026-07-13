import type { CSSProperties, ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
  position?: string;
}

export function PageHero({ title, eyebrow, subtitle, image, children, position = 'center' }: PageHeroProps) {
  const style = {
    '--page-hero-image': `url(${image})`,
    '--page-hero-position': position
  } as CSSProperties;

  return (
    <section className="page-hero" style={style}>
      <div className="page-hero__overlay" />
      <div className="shell page-hero__content">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
