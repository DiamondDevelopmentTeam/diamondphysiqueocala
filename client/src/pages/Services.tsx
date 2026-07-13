import { Link } from 'react-router-dom';
import training from '../assets/images/training.png';
import workout from '../assets/images/workout.png';
import { CallToAction } from '../components/CallToAction';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data';

export function Services() {
  return (
    <main>
      <PageHero
        image={workout}
        eyebrow="Training services"
        title="A Smarter Way to Train"
        subtitle="Personalized strength, mobility and transformation programs in a private Ocala studio."
      >
        <Link className="button button--gold" to="/book-your-session">Book a Complimentary Evaluation</Link>
      </PageHero>

      <section className="section section--cream">
        <div className="shell">
          <SectionHeading
            eyebrow="Built around your goals"
            title="Personal Training Services"
            intro="Every service begins with an understanding of your current ability, movement needs and desired outcome."
            align="center"
          />
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} number={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section service-process" style={{ backgroundImage: `url(${training})` }}>
        <div className="service-process__overlay" />
        <div className="shell service-process__content">
          <SectionHeading eyebrow="How it works" title="Simple Steps. Clear Direction." />
          <div className="process-grid">
            <article><span>01</span><h3>Evaluate</h3><p>Discuss goals, training history, mobility, strength and any limitations.</p></article>
            <article><span>02</span><h3>Plan</h3><p>Create a personalized approach with exercises and progressions suited to you.</p></article>
            <article><span>03</span><h3>Train</h3><p>Work through focused sessions with coaching, accountability and adjustments.</p></article>
            <article><span>04</span><h3>Progress</h3><p>Track improvements and evolve the plan as your strength and confidence grow.</p></article>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
