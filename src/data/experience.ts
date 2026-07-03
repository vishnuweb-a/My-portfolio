import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'freelance-backend',
    role: 'Freelance Backend Developer',
    organization: 'Independent',
    type: 'freelance',
    duration: '2025 - Present',
    description:
      'Building custom backend solutions, REST APIs, and database architectures for startups and small businesses.',
    highlights: [
      'Delivered production-ready APIs for multiple clients',
      'Designed database schemas for scalable applications',
      'Implemented authentication and authorization systems',
    ],
    techUsed: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'hackathon-participant',
    role: 'Hackathon Participant',
    organization: 'Multiple Hackathons',
    type: 'hackathon',
    duration: '2023 - Present',
    description:
      'Competed in various hackathons, building rapid prototypes and innovative solutions under tight deadlines.',
    highlights: [
      'Built functional prototypes in under 48 hours',
      'Collaborated in cross-functional teams',
      'Presented technical solutions to judges and mentors',
    ],
    techUsed: ['Node.js', 'Python', 'React', 'MongoDB', 'LangChain'],
  },
  {
    id: 'open-source-contributor',
    role: 'Open Source Contributor',
    organization: 'GitHub',
    type: 'open-source',
    duration: '2025 - Present',
    description:
      'Contributing to open-source projects and maintaining personal open-source tools used by other developers.',
    highlights: [
      'Published reusable authentication boilerplate',
      'Created MCP tools for database management',
      'Active on GitHub with consistent contributions',
    ],
    techUsed: ['Node.js', 'Python', 'TypeScript', 'MongoDB'],
  },
  {
  id: 'campus-ambassador-iitb',
  role: 'Campus Ambassador',
  organization: 'E-Cell, IIT Bombay',
  type: 'leadership',
  duration: '2025 - Present',
  description:
    'Representing E-Cell, IIT Bombay on campus by fostering entrepreneurship, promoting innovation-driven initiatives, and connecting students with startup ecosystems through events, workshops, and networking opportunities.',
  highlights: [
    'Promoted entrepreneurship initiatives and flagship E-Cell programs across campus',
    'Organized and coordinated startup-focused events, workshops, and student outreach campaigns',
    'Built a strong entrepreneurial community by engaging students with founders, mentors, and innovation challenges',
  ],
  techUsed: [
    'Leadership',
    'Community Building',
    'Event Management',
    'Public Speaking',
    'Marketing',
    'Networking',
  ],
},
];
