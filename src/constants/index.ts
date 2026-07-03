import type { NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const SECTION_IDS = {
  hero: 'hero',
  about: 'about',
  timeline: 'timeline',
  skills: 'skills',
  projects: 'projects',
  experience: 'experience',
  contact: 'contact',
} as const;
