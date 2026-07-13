import { Link } from 'react-router-dom';
import entrance from '../assets/images/entrance.png';
import hero from '../assets/images/cover.png';
import training from '../assets/images/training.png';
import workout from '../assets/images/workout.png';
import { CallToAction } from '../components/CallToAction';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';

const offerings = [
  'Personal training',
  'Strength and resistance training',
  'Weight loss and body transformation',
  'Mobility and performance training',
  'Corrective exercise and recovery-focused training',
  'Customized workout plans',
  'Progress tracking and accountability'
];

export function About() {
  return (
    <main>
      <PageHero
        image={hero}
        eyebrow="About Diamond Physique Ocala"
        title="Your Strongest Self Starts Here"
        subtitle="Private coaching, purposeful movement and a studio built around your progress."
      >
        <Link className="button button--gold" to="/book-your-session">Start Your First Session</Link>
      </PageHero>

      <section className="section section--cream">
        <div className="shell split-section">
          <div>
            <SectionHeading eyebrow="A private studio with a personal approach" title="Training That Meets You Where You Are" />
            <p>
              Diamond Physique Ocala is designed for people who want individualized attention without the noise and pressure
              of a crowded gym. Every session is built around your current ability, goals and movement needs.
            </p>
            <p>
              The studio blends strength, mobility, body mechanics and accountability to create a clear path forward. The
              goal is not a one-size-fits-all routine. It is a program that makes sense for your body and your life.
            </p>
          </div>
          <img className="split-section__image" src={entrance} alt="Entrance to Diamond Physique Ocala" />
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell">
          <SectionHeading
            eyebrow="What the studio offers"
            title="A Complete, Goal-Focused Training Experience"
            intro="From first-time gym clients to experienced lifters, the program adapts to the person rather than forcing the person into a generic plan."
            align="center"
          />
          <div className="feature-grid">
            {offerings.map((offering, index) => (
              <article className="feature-card" key={offering}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{offering}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="shell split-section split-section--reverse">
          <img className="split-section__image" src={training} alt="Personal strength training session" loading="lazy" />
          <div>
            <SectionHeading eyebrow="More than a gym" title="A Supportive Place to Build Momentum" />
            <p>
              Diamond Physique Ocala is located inside Diamond Salon Ocala, creating a connected environment for fitness,
              wellness and personal care. The private studio setting gives clients space to focus while still enjoying the
              convenience of a broader wellness destination.
            </p>
            <p>
              The atmosphere is professional, encouraging and progress-driven. Each session is an opportunity to move with
              more confidence, understand your body and build habits that last.
            </p>
            <Link className="text-link" to="/meet-the-trainer">Meet Matthew <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="image-band" style={{ backgroundImage: `url(${workout})` }}>
        <div className="image-band__overlay" />
        <div className="shell image-band__content">
          <p className="eyebrow">Focused. Personal. Built around you.</p>
          <h2>Progress becomes possible when the plan finally fits.</h2>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
