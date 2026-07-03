import type { Project } from '../types';
import shipbihar from '../assets/shipbihar-img.png'
export const projects: Project[] = [
  {
    id: 'shipbihar',
    slug: 'shipbihar',
    title: 'ShipBihar',
    description:
      'A full-scale logistics and shipping management platform built with microservices architecture. Handles order tracking, fleet management, and real-time delivery updates.',
    problem:
      'Local shipping companies in Bihar lacked a unified digital platform for managing deliveries, tracking shipments, and coordinating fleet operations.',
    solution:
      'Built a comprehensive logistics platform with real-time tracking, automated routing, and a dashboard for fleet managers to monitor operations.',
    category: 'fullstack',
    status: 'completed',
    featured: true,
    techStack: ['Node.js', 'Express.js', 'Mongodb', 'Redis', 'Docker', 'RabbitMQ'],
    features: [
      'Real-time shipment tracking',
      'Fleet management dashboard',
      'Automated route optimization',
      'Order management system',
      'Role-based access control',
      'Analytics and reporting',
    ],
    architecture: 'Microservices with message queues',
    challenges: [
      'Designing a scalable message queue system for order processing',
      'Implementing real-time tracking with WebSockets',
      'Managing database migrations across services',
    ],
    learnings: [
      'Microservices communication patterns',
      'Redis caching strategies',
      'Docker container orchestration',
    ],
    images: { banner: shipbihar, screenshots: [] },
    links: {
      github: 'https://github.com/vishnuweb-a/aggregator-software',
    },
    tags: ['logistics', 'microservices', 'real-time', 'docker'],
  },
  {
    id: 'hospital-queue',
    slug: 'hospital-queue-management',
    title: 'Hospital Queue Management System',
    description:
      'A queue management system for hospitals that optimizes patient flow, reduces wait times, and provides real-time status updates to patients and staff.',
    problem:
      'Hospital outpatient departments face long, unorganized queues causing patient frustration and inefficient resource utilization.',
    solution:
      'Digital queue management with priority scheduling, estimated wait times, and SMS notifications for patients.',
    category: 'backend',
    status: 'in-progress',
    featured: true,
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'WebSockets'],
    features: [
      'Priority-based queue scheduling',
      'Real-time wait time estimation',
      'Doctor availability dashboard',
      'Patient notification system',
      'Analytics for hospital administration',
    ],
    images: { banner: undefined, screenshots: [] },
    links: {
      github: 'https://github.com/vishnuweb-a/hospital-managemment-system',
    },
    tags: ['healthcare', 'queue', 'real-time', 'backend'],
  },
  {
    id: 'github-rag-chatbot',
    slug: 'github-rag-chatbot',
    title: 'GitHub RAG Chatbot',
    description:
      'An AI-powered chatbot that ingests GitHub repositories and answers questions about the codebase using Retrieval-Augmented Generation.',
    problem:
      'Developers spend significant time understanding unfamiliar codebases. Documentation is often outdated or incomplete.',
    solution:
      'Built a RAG pipeline that indexes repository contents into a vector database and uses LLMs to answer natural language questions about the code.',
    category: 'ai',
    status: 'in-progress',
    featured: true,
    techStack: ['Python', 'LangChain', 'ChromaDB', 'OpenAI API'],
    features: [
      'Repository ingestion and indexing',
      'Semantic code search',
      'Context-aware Q&A',
      'Support for multiple repositories',
      'Conversation memory',
    ],
    images: { banner: undefined, screenshots: [] },
    links: {
      github: 'https://github.com/vishnuweb-a/githhub-analyser',
    },
    tags: ['ai', 'rag', 'langchain', 'vector-db'],
  },
  {
    id: 'mongo-agent-mcp',
    slug: 'mongo-agent-mcp',
    title: 'Mongo Agent MCP',
    description:
      'An AI agent built on the Model Context Protocol that can autonomously query, analyze, and manage MongoDB databases through natural language.',
    problem:
      'Database operations require SQL/query language knowledge. Non-technical stakeholders cannot directly interact with data.',
    solution:
      'Created an MCP-based agent that translates natural language into MongoDB operations, with safety guardrails for production use.',
    category: 'ai',
    status: 'completed',
    featured: true,
    techStack: ['Python', 'MongoDB', 'MCP', 'LLM APIs'],
    features: [
      'Natural language to MongoDB queries',
      'Read/write operation support',
      'Safety guardrails for destructive operations',
      'Schema introspection',
      'Query explanation',
    ],
    images: { banner: undefined, screenshots: [] },
    links: {
      github: 'https://github.com/vishnuweb-a/mongo_agent_mcp',
    },
    tags: ['ai', 'mcp', 'mongodb', 'agentic'],
  },
  {
    id: 'social-media-backend',
    slug: 'social-media-backend',
    title: 'Social Media Backend',
    description:
      'A scalable backend API for a social media platform supporting user profiles, posts, comments, likes, follows, and real-time notifications.',
    problem:
      'Building a social platform requires complex data relationships, real-time features, and careful consideration of scale.',
    solution:
      'Designed a clean MVC architecture with MongoDB, implementing efficient data models for social graph operations.',
    category: 'backend',
    status: 'completed',
    featured: false,
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'WebSockets', 'JWT'],
    features: [
      'User authentication and profiles',
      'Post CRUD with media support',
      'Social graph (follow/unfollow)',
      'Real-time notifications',
      'Feed generation algorithm',
    ],
    images: { banner: undefined, screenshots: [] },
    links: {
      github: 'https://github.com/vishnuweb-a/productive--social-media',
    },
    tags: ['social', 'api', 'mongodb', 'websockets'],
  },
  {
    id: 'auth-boilerplate',
    slug: 'auth-boilerplate',
    title: 'Authentication Boilerplate',
    description:
      'A production-ready authentication system boilerplate with JWT, refresh tokens, role-based access, email verification, and password reset.',
    problem:
      'Every new project requires setting up authentication from scratch, which is repetitive and error-prone.',
    solution:
      'Created a reusable, well-documented auth boilerplate following security best practices that can be dropped into any Node.js project.',
    category: 'open-source',
    status: 'completed',
    featured: false,
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Nodemailer'],
    features: [
      'JWT + Refresh token authentication',
      'Role-based access control',
      'Email verification flow',
      'Password reset with secure tokens',
      'Rate limiting',
      'Input sanitization',
    ],
    images: { banner: undefined, screenshots: [] },
    links: {
      github: 'https://github.com/vishnuweb-a/self-lerning-auth',
    },
    tags: ['auth', 'security', 'boilerplate', 'open-source'],
  },
];
