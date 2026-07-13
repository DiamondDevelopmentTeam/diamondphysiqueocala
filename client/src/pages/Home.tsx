import { Link } from 'react-router-dom';
import cover from '../assets/images/cover.png';
import entrance from '../assets/images/entrance.png';
import trainer from '../assets/images/trainer.png';
import training from '../assets/images/training.png';
import workingout2 from '../assets/images/workingout2.png';
import workout from '../assets/images/workout.png';
import diamondSalonOcala from '../assets/images/diamondSalonOcala.png';
import { Brand } from '../components/Brand';
import { CallToAction } from '../components/CallToAction';
import { GoldCheckList } from '../components/GoldCheckList';
import { ImageCarousel } from '../components/ImageCarousel';
import { SectionHeading } from '../components/SectionHeading';
import { complimentarySessionPoints, differentiators } from '../data';

const gallery = [
  { src: entrance, alt: 'Entrance to the Diamond Physique private personal training studio' },
  { src: cover, alt: 'Diamond Physique Ocala studio branding' },
  { src: diamondSalonOcala, alt: 'Diamond Salon Ocala branding' }
] as const;

export function Home() {
  return (
    <main>
      <section className="home-hero" style={{ backgroundImage: `url(${cover})` }}>
        <div className="home-hero__shade" />
        <div className="shell home-hero__content">
          <p className="eyebrow">Private personal training in Ocala</p>
          <h1>Build strength.<br />Move better.<br /><span>Feel unstoppable.</span></h1>
          <p className="home-hero__lead">
            Personalized one-on-one coaching in a private, supportive studio inside Diamond Salon Ocala.
          </p>
          <div className="button-row">
            <Link className="button button--gold" to="/book-your-session">Book a Complimentary Session</Link>
            <Link className="button button--outline" to="/meet-the-trainer">Meet the Trainer</Link>
          </div>
        </div>
      </section>

      <section className="session-banner">
        <div className="shell session-banner__inner">
          <div>
            <span>Start with a complimentary session</span>
            <strong>1 Hour Evaluation + Training Session</strong>
          </div>
          <Link to="/book-your-session">Reserve Your Time <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="section section--cream studio-intro">
        <div className="shell studio-intro__grid">
          <div className="studio-intro__copy">
            <SectionHeading
              eyebrow="Strength • Confidence • Transformation"
              title="Private Personal Training Studio"
            />
            <p>
              Diamond Physique Ocala is a private personal training studio designed for individuals who want focused,
              professional guidance in a comfortable and supportive environment.
            </p>
            <p>
              Located inside <strong>Diamond Salon Ocala</strong>, the studio provides personalized training programs led by
              a Certified Personal Trainer with education in physical therapy and rehabilitation.
            </p>
            <p>
              Whether you are new to the gym, recovering from an injury, or ready to take your fitness to the next level,
              every program is shaped around your goals.
            </p>
            <Link className="text-link" to="/about">Learn more about the studio <span aria-hidden="true">→</span></Link>
          </div>

          <div className="image-collage" aria-label="Personal training image collage">
            <img className="image-collage__large" src={training} alt="Woman performing strength training in a gym" />
            <img className="image-collage__small" src={workingout2} alt="Clients completing a coached workout" loading="lazy" />
            <span className="image-collage__accent" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section difference-section" style={{ backgroundImage: `url(${workout})` }}>
        <div className="difference-section__overlay" />
        <div className="shell difference-section__grid">
          <div className="trainer-frame">
            <img src={trainer} alt="Diamond Physique Ocala personal trainer" loading="lazy" />
            <span className="trainer-frame__label">Expert Trainer</span>
          </div>

          <div className="difference-section__copy">
            <SectionHeading eyebrow="Focused coaching. Thoughtful programming." title="What Makes Diamond Physique Different" />
            <GoldCheckList items={differentiators} />
            <Link className="button button--gold" to="/services">Explore Services</Link>
          </div>
        </div>
      </section>

      <section className="transformation-title">
        <div className="shell">Take the first step toward your transformation</div>
      </section>

      <section className="section complimentary-section" style={{ backgroundImage: `url(${workingout2})` }}>
        <div className="complimentary-section__overlay" />
        <div className="shell complimentary-section__grid">
          <div className="complimentary-section__brand">
            <Brand />
          </div>
          <div className="complimentary-section__copy">
            <SectionHeading title="Start With a Complimentary Session" />
            <p>Every new client receives a complimentary first session that includes:</p>
            <p className="complimentary-session__feature">1 Hour Evaluation + Training Session</p>
            <p>This session allows us to:</p>
            <GoldCheckList items={complimentarySessionPoints} strong />
            <Link className="button button--gold" to="/book-your-session">Claim Your Complimentary Session</Link>
          </div>
        </div>
      </section>

      <section className="section section--cream wellness-section">
        <div className="shell wellness-section__grid">
          <div>
            <SectionHeading title="Fitness and Wellness Under One Roof" />
            <p>
              Diamond Physique Ocala was created to provide professional personal training in a focused, supportive
              environment where strength, health and confidence come together.
            </p>
            <p>
              Located within <strong>Diamond Salon Ocala</strong>, Diamond Physique offers the convenience of multiple wellness
              and personal care services in one place. Clients can build fitness into their routine while staying connected
              to services that support their overall lifestyle.
            </p>
            <p>
              At its core, Diamond Physique Ocala is dedicated to helping clients build strength, improve well-being and feel
              more confident in a connected wellness environment.
            </p>
          </div>
          <ImageCarousel images={gallery} />
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
