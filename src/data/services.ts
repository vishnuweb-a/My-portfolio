import type { Service, PricingTier } from '../types';

export const services: Service[] = [
  {
    id: 'backend-dev',
    title: 'Backend Development',
    description: 'Scalable server-side applications with clean architecture and robust error handling.',
    icon: 'server',
    features: [
      'REST API design and implementation',
      'Database schema design',
      'Authentication and authorization',
      'Performance optimization',
    ],
  },
  {
    id: 'api-development',
    title: 'API Development',
    description: 'Well-documented, secure, and performant APIs built to your specifications.',
    icon: 'globe',
    features: [
      'RESTful API architecture',
      'API documentation with Swagger/Postman',
      'Rate limiting and security',
      'Third-party API integration',
    ],
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description: 'Integrate AI capabilities into your existing applications using modern LLM frameworks.',
    icon: 'brain',
    features: [
      'RAG application development',
      'LLM integration and prompt engineering',
      'AI automation workflows',
      'Chatbot development',
    ],
  },
  {
    id: 'db-design',
    title: 'Database Design',
    description: 'Efficient database architectures optimized for your data patterns and query requirements.',
    icon: 'database',
    features: [
      'Schema design (SQL and NoSQL)',
      'Query optimization',
      'Migration strategies',
      'Data modeling',
    ],
  },
];

export const pricingTiers: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 'Contact',
    description: 'For small projects and quick fixes.',
    features: [
      'Single API endpoint or feature',
      'Basic documentation',
      'Bug fixes and patches',
      '1 revision round',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 'Contact',
    description: 'For complete backend systems and integrations.',
    features: [
      'Full API development',
      'Database design',
      'Authentication system',
      'API documentation',
      'Deployment support',
      '3 revision rounds',
    ],
    highlighted: true,
    cta: 'Get Quote',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'Contact',
    description: 'For complex systems with AI and advanced architecture.',
    features: [
      'Everything in Standard',
      'AI/RAG integration',
      'Microservices architecture',
      'Performance optimization',
      'Ongoing support',
      'Unlimited revisions',
    ],
    highlighted: false,
    cta: 'Book a Call',
  },
];
