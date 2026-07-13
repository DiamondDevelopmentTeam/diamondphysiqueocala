import { Link } from 'react-router-dom';
import trainer from '../assets/images/trainer.png';
import trainerFace from '../assets/images/trainerFace.png';
import trainersBack from '../assets/images/trainersBack.png';
import workingout2 from '../assets/images/workingout2.png';
import { CallToAction } from '../components/CallToAction';
import { GoldCheckList } from '../components/GoldCheckList';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';

const specialties = [
  'Weight loss transformation',
  'Strength and resistance training',
  'Muscle development',
  'Injury recovery support',
  'Mobility and flexibility improvement'
];

const credentials = [
  'ISSA Certified Personal Trainer',
  'Associate of Science, Physical Therapy Assistant',
  'Certified Stretch Practitioner'
];

export function MeetTheTrainer() {
  return (
    <main>
      <PageHero
        image={trainersBack}
        position="center 28%"
        eyebrow="Meet the trainer"
        title="Matthew Ahmed"
        subtitle="Certified Personal Trainer with a rehabilitation and body-mechanics background."
      >
        <Link className="button button--gold" to="/book-your-session">Book Your Free First Session</Link>
      </PageHero>

      <section className="section section--cream trainer-profile">
        <div className="shell trainer-profile__grid">
          <div className="trainer-profile__portrait-wrap">
            <img className="trainer-profile__portrait" src={trainerFace} alt="Portrait of trainer Matthew Ahmed" />
            <div className="trainer-profile__badge">
              <strong>Matthew Ahmed</strong>
              <span>Certified Personal Trainer</span>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Experience backed by movement science" title="Training With Purpose" />
            <p>
              Originally from Long Island, New York, Matthew Ahmed is now based in Ocala and brings a practical,
              personalized approach to every training session.
            </p>
            <p>
              His Associate of Science education as a Physical Therapy Assistant gives him a strong foundation in
              rehabilitation, movement mechanics and exercise modification. That background supports clients who want to
              build strength while moving with greater awareness and confidence.
            </p>
            <p>
              With three years of professional training experience, Matthew creates programs that challenge clients while
              respecting their starting point, goals and limitations.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell trainer-details-grid">
          <div>
            <SectionHeading eyebrow="Areas of focus" title="Personalized Coaching for Real-Life Goals" />
            <GoldCheckList items={specialties} />
          </div>
          <div className="credential-panel">
            <p className="eyebrow">Credentials</p>
            {credentials.map((credential) => (
              <div key={credential} className="credential-panel__item">
                <span aria-hidden="true">◆</span>
                <strong>{credential}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="shell split-section split-section--reverse">
          <div className="trainer-stack">
            <img src={trainer} alt="Matthew Ahmed at Diamond Physique Ocala" loading="lazy" />
            <img src={workingout2} alt="Guided personal training session" loading="lazy" />
          </div>
          <div>
            <SectionHeading eyebrow="A coach in your corner" title="Clear Guidance, Honest Progress" />
            <p>
              Training is most effective when clients understand what they are doing and why. Matthew emphasizes technique,
              communication and gradual progression so every workout has a clear purpose.
            </p>
            <p>
              Whether the goal is to feel stronger, improve movement, return after an injury or simply become more consistent,
              each program is built to create progress that feels achievable and sustainable.
            </p>
            <Link className="button button--dark" to="/book-your-session">Train With Matthew</Link>
          </div>
        </div>
      </section>

      <CallToAction title="Book your free first session with Matthew" />
    </main>
  );
}
