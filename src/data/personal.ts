import type { PersonalInfo } from '../types';
import   my_pic    from '../assets/my_portfolio-image.png'

export const personalInfo: PersonalInfo = {
  name: 'Vishnu Bhardwaj',
  firstName: 'Vishnu',
  lastName: 'Bhardwaj',
  title: 'Backend Developer & AI Engineer',
  roles: [
    'Backend Developer',
    'AI Engineer',
    'System Designer',
    'Problem Solver',
  ],
  tagline: 'Always Building.',
  summary:
    'I build scalable backend systems and intelligent AI applications. Passionate about clean architecture, distributed systems, and turning complex problems into elegant solutions.',
  philosophy:
    'Software engineering is about building systems that work reliably at scale. I approach every problem with first-principles thinking, choosing the right tool for the job and designing for maintainability from day one.',
  email: 'vb16vishnu@gmail.com',
  location: 'India',
  resumeUrl: 'https://drive.google.com/file/d/1ZQMiyfc893RF9xFvShiJHiZTM239oSK2/view?usp=sharing',
  profileImage: my_pic,
  socials: [
    {
      platform: 'GitHub',
      url: 'https://github.com/vishnuweb-a',
      icon: 'github',
      label: 'GitHub Profile',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vishnu-bhardwaj-81006b382?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      icon: 'linkedin',
      label: 'LinkedIn Profile',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/vishnubhardwaj.dev?igsh=b2N0cHd5d2JybWZu',
      icon: 'instagram',
      label: 'Instagram',
    },
    
    {
      platform: 'Email',
      url: 'vb16vishnu@gmail.com',
      icon: 'mail',
      label: 'Send Email',
    },
    {
      platform: 'LeetCode',
      url: 'https://leetcode.com/vishnubhardwaj',
      icon: 'code',
      label: 'LeetCode Profile',
    },
  ],
};
