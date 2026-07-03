// =============================================================================
// Portfolio 3.0 — Core Type Definitions
// =============================================================================

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  roles: string[];
  tagline: string;
  summary: string;
  philosophy: string;
  email: string;
  phone?: string;
  location: string;
  resumeUrl?: string;
  profileImage?: string;
  socials: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  description: string;
  icon: string;
  relatedProjects: string[];
  docUrl?: string;
  status: 'proficient' | 'learning' | 'exploring';
}

export type SkillCategory =
  | 'programming'
  | 'backend'
  | 'database'
  | 'ai'
  | 'architecture'
  | 'tools';

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  category: ProjectCategory;
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  techStack: string[];
  features: string[];
  architecture?: string;
  challenges?: string[];
  learnings?: string[];
  images: {
    banner?: string;
    screenshots?: string[];
  };
  links: {
    github?: string;
    live?: string;
    docs?: string;
    demo?: string;
  };
  timeline?: string;
  tags: string[];
}

export type ProjectCategory = 'backend' | 'ai' | 'fullstack' | 'devtools' | 'open-source';

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'career' | 'project' | 'achievement' | 'future';
  highlight?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  type: 'internship' | 'freelance' | 'hackathon' | 'open-source' | 'leadership';
  duration: string;
  description: string;
  highlights: string[];
  techUsed?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  thumbnail?: string;
  content: string;
  author: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  company?: string;
  projectType?: string;
  budget?: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}
