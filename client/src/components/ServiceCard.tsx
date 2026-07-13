import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  bullets: readonly string[];
  number: number;
}

export function ServiceCard({ title, description, bullets, number }: ServiceCardProps) {
  return (
    <article className="service-card">
      <span className="service-card__number">{String(number).padStart(2, '0')}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
      <Link to="/book-your-session">Book this service <span aria-hidden="true">→</span></Link>
    </article>
  );
}
