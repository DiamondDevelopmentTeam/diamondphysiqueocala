import { Link } from 'react-router-dom';
import workout from '../assets/images/workout.png';
import { PageHero } from '../components/PageHero';

export function Blog() {
  return (
    <main>
      <PageHero
        image={workout}
        eyebrow="Diamond Physique journal"
        title="Fitness Insights Coming Soon"
        subtitle="Practical guidance on strength, mobility, recovery and building a more confident relationship with movement."
      />

      <section className="section section--cream empty-blog">
        <div className="shell empty-blog__inner">
          <span className="empty-blog__diamond" aria-hidden="true">◆</span>
          <p className="eyebrow">The journal is getting warmed up</p>
          <h2>Useful Articles Are on the Way</h2>
          <p>
            New posts will be added here as they become available. For now, explore the training services or reserve a
            complimentary first session.
          </p>
          <div className="button-row button-row--center">
            <Link className="button button--dark" to="/services">Explore Services</Link>
            <Link className="button button--gold" to="/book-your-session">Book Your Session</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
