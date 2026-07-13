import { Link } from 'react-router-dom';

interface CallToActionProps {
  title?: string;
  text?: string;
}

export function CallToAction({
  title = 'Take the first step toward your transformation',
  text = 'Begin with a complimentary one-hour evaluation and training session.'
}: CallToActionProps) {
  return (
    <section className="cta-section">
      <div className="shell cta-section__inner">
        <div>
          <p className="eyebrow eyebrow--dark">Your next chapter starts here</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link className="button button--dark" to="/book-your-session">Book Your Session</Link>
      </div>
    </section>
  );
}
