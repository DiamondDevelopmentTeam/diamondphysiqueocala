export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Meet the Trainer', to: '/meet-the-trainer' },
  { label: 'Services', to: '/services' },
  { label: 'Book Your Session', to: '/book-your-session' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' }
] as const;

export const differentiators = [
  'Certified Personal Trainer with rehabilitation knowledge',
  'Private one-on-one training sessions',
  'Customized programs for every fitness level',
  'Strength training and resistance programs',
  'Injury prevention and recovery-focused training',
  'Stretch and mobility sessions available',
  'Located inside Diamond Salon Ocala for convenience'
] as const;

export const complimentarySessionPoints = [
  'Understand your fitness goals',
  'Evaluate mobility and strength',
  'Discuss any injuries or limitations',
  'Introduce you to the training environment',
  'Begin building your personalized fitness plan'
] as const;

export const services = [
  {
    title: 'Personal Training',
    description:
      'Focused one-on-one coaching built around your goals, ability, schedule and comfort level.',
    bullets: ['Private sessions', 'Form and technique coaching', 'Progressive programming']
  },
  {
    title: 'Strength & Resistance Training',
    description:
      'Structured strength work that helps improve power, stability, confidence and everyday performance.',
    bullets: ['Foundational movement patterns', 'Progressive resistance', 'Technique-first coaching']
  },
  {
    title: 'Weight Loss & Body Transformation',
    description:
      'A practical training approach designed to support sustainable body-composition and fitness goals.',
    bullets: ['Goal-focused sessions', 'Consistent progress tracking', 'Accountability and support']
  },
  {
    title: 'Injury Recovery & Corrective Training',
    description:
      'Thoughtful exercise selection for clients returning to movement or working around limitations.',
    bullets: ['Movement modifications', 'Body mechanics education', 'Recovery-aware progression']
  },
  {
    title: 'Stretch & Mobility',
    description:
      'Guided mobility and stretching sessions that support movement quality, comfort and range of motion.',
    bullets: ['Mobility assessment', 'Assisted stretching', 'Movement preparation']
  },
  {
    title: 'Mobility & Performance Training',
    description:
      'Training that blends strength, control and movement efficiency for better physical performance.',
    bullets: ['Balance and control', 'Functional strength', 'Movement efficiency']
  },
  {
    title: 'First-Session Fitness Evaluation',
    description:
      'A complimentary one-hour evaluation and training session for new clients.',
    bullets: ['Goal review', 'Strength and mobility evaluation', 'Personalized next steps']
  },
  {
    title: 'Additional Gym Access',
    description:
      'Convenient training inside Diamond Salon Ocala, creating a connected fitness and wellness experience.',
    bullets: ['Private studio setting', 'Convenient Ocala location', 'Supportive atmosphere']
  }
] as const;

export const contactDetails = {
  addressLine1: '1020 SW 6th Ave',
  addressLine2: 'Ocala, FL 34471',
  phoneDisplay: '352-286-5282',
  phoneHref: '+13522865282',
  email: 'Matthew@DiamondPhysiqueOcala.com',
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/'
} as const;
