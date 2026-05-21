import cardImage1 from '../assets/images/card-1.jpg';
import cardImage2 from '../assets/images/card-2.jpg';
import cardImage3 from '../assets/images/card-3.jpg';
import cardImage4 from '../assets/images/card-4.jpg';

export const heroContent = {
  title: ['Simple Pricing', 'Scalable Power.'],
  description: [
    'Full architecture design of a custom agent tailored to your',
    'specific business logic and brand voice.',
  ],
};

export const pricingPlans = [
  {
    eyebrow: 'Outbound Solutions',
    title: 'Outbound Calling Service',
    description: 'Transform your outreach with proactive voice agents that execute campaigns on autopilot.',
    price: 'Starting from $0.40/per minute',
    features: [
      'Strategy & Setup: High-conversion conversational flows',
      'Dynamic Scripting: Real-time adaptive responses',
      'Campaign Hours: Flexible timezone scheduling',
      'Infrastructure: Your VoIP or Global Infrastructure',
      'Performance Tracking & analytics',
    ],
    accent: 'var(--color-plan-purple)',
    variant: 'light',
  },
  {
    eyebrow: 'Inbound & Customer Service',
    title: 'Inbound Calling Service',
    description: 'Voice agents that understand intent and execute real business actions in real time.',
    price: 'Starting from $500/per agent',
    features: [
      'Action-oriented support: bookings, tickets, queries',
      'CRM integration: Zendesk, Salesforce, and more',
      '24/7 resolution with zero wait time',
      'Omnichannel support: voice, chat, messaging',
      'Intelligent escalation to human agents',
    ],
    accent: 'var(--color-plan-pink)',
    variant: 'dark',
  },
];

export const services = [
  {
    title: 'Custom Agent Development',
    copy: 'Full architecture design of a custom agent tailored to your specific business logic and brand voice.',
    borderColor: 'var(--color-primary)',
    image: cardImage1,
    quoteHref: '#pricing-quote',
  },
  {
    title: 'Quality Control (QC)',
    copy: 'Audits conversations, flags risks, and keeps service quality consistent across every channel.',
    borderColor: 'var(--color-plan-purple)',
    image: cardImage2,
    quoteHref: '#pricing-quote',
  },
  {
    title: 'Global VoIP Infrastructure',
    copy: 'High-deliverability telephony, routing, and CRM-ready integrations for reliable calling.',
    borderColor: 'var(--color-service-green)',
    image: cardImage3,
    quoteHref: '#pricing-quote',
  },
  {
    title: 'Global VoIP Infrastructure',
    copy: 'Scale agent coverage across regions with resilient calling routes and real-time monitoring.',
    borderColor: 'var(--color-plan-pink)',
    image: cardImage4,
    quoteHref: '#pricing-quote',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Infrastructure Integration',
    copy: 'Connect our platform with your existing VoIP provider or leverage our optimized high-deliverability network. We sync with your CRM to ensure the agent has full context.',
  },
  {
    number: '02',
    title: 'Script & Workflow Design',
    copy: 'Our experts build your dynamic scripts and business logic. We define exactly how the agent handles every scenario to ensure professional and accurate interactions.',
  },
  {
    number: '03',
    title: 'Launch & Continuous Optimization',
    copy: 'Go live with 100% transparency. We monitor every interaction, providing you with detailed analytics and constant performance tuning to improve resolution rates.',
  },
];
