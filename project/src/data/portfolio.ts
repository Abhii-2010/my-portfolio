import {
  Code2,
  Layout,
  Server,
  Smartphone,
  Palette,
  Database,
  Github,
  Globe,
  GraduationCap,
  Zap,
  BookOpen,
  Trophy,
} from 'lucide-react';

export type IconType = typeof Code2;

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Quizzes', href: '#quizzes' },
  { label: 'Contact', href: '#contact' },
] as const;

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Globe },
] as const;

export const STATS = [
  { value: '3+', label: 'Years Coding' },
  { value: '15+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
  { value: 'BCA', label: 'Pursuing Degree' },
];

export const SKILL_CATEGORIES = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'React', level: 85 },
      { name: 'HTML / CSS', level: 90 },
      { name: 'JavaScript', level: 82 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  {
    title: 'Backend & Database',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express', level: 72 },
      { name: 'MongoDB', level: 78 },
      { name: 'SQL / PostgreSQL', level: 70 },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: Database,
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'VS Code', level: 92 },
      { name: 'Postman', level: 80 },
      { name: 'Vite', level: 78 },
    ],
  },
  {
    title: 'Design & Creative',
    icon: Palette,
    skills: [
      { name: 'UI Design', level: 75 },
      { name: 'Responsive Design', level: 82 },
      { name: 'Figma', level: 70 },
      { name: 'CSS Animations', level: 78 },
    ],
  },
] as const;

export const TECH_MARQUEE = [
  'React',
  'JavaScript',
  'Node.js',
  'Express',
  'MongoDB',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'Git',
  'C++',
  'Python',
  'SQL',
] as const;

export const PROJECTS = [
  {
    title: 'Student Management System',
    category: 'Full-Stack Web App',
    description:
      'A complete CRUD application for managing student records with authentication, role-based access, and a clean dashboard built with React and Node.js.',
    image:
      'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: '#',
    featured: true,
  },
  {
    title: 'E-Commerce Store',
    category: 'Web Application',
    description:
      'A full-featured online store with product catalog, cart functionality, user authentication, and Stripe payment integration.',
    image:
      'https://images.pexels.com/photos/16675632/pexels-photo-16675632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['React', 'Stripe', 'PostgreSQL', 'Tailwind'],
    link: '#',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    category: 'Frontend',
    description:
      'A responsive portfolio website with dark/light mode, smooth animations, and a contact form — built with React and Tailwind CSS.',
    image:
      'https://images.pexels.com/photos/38564570/pexels-photo-38564570.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['React', 'Tailwind', 'Vite'],
    link: '#',
    featured: false,
  },
  {
    title: 'Weather App',
    category: 'API Integration',
    description:
      'A real-time weather application that fetches data from a public API, displays forecasts, and saves favorite locations.',
    image:
      'https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['JavaScript', 'REST API', 'CSS3'],
    link: '#',
    featured: false,
  },
] as const;

export const EXPERIENCE = [
  {
    role: 'BCA Student — Full Stack & Web Development',
    company: 'JECRC, Jaipur',
    period: '2023 — Present',
    description:
      'Pursuing a Bachelor of Computer Applications with a focus on full-stack development and modern web technologies. Building real projects alongside coursework.',
    achievements: [
      'Built 15+ web projects using React, Node.js, and MongoDB',
      'Completed full-stack web development coursework with hands-on projects',
      'Participated in college coding hackathons and tech events',
    ],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2024 — Present',
    description:
      'Taking on freelance web development projects — building responsive websites and web apps for small businesses and student organizations.',
    achievements: [
      'Delivered responsive websites for local businesses',
      'Created reusable component libraries for faster development',
      'Improved page load speeds using modern optimization techniques',
    ],
  },
  {
    role: 'Programming Fundamentals',
    company: 'Self-Taught & College',
    period: '2022 — 2023',
    description:
      'Started the coding journey learning C++, Python, and the fundamentals of data structures, algorithms, and object-oriented programming.',
    achievements: [
      'Mastered core programming concepts in C++ and Python',
      'Built console-based projects to strengthen logic building',
      'Completed online courses in web development and JavaScript',
    ],
  },
] as const;

export const SERVICES = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building modern, responsive websites and web apps with React, Node.js, and clean code practices.',
  },
  {
    icon: Layout,
    title: 'Frontend Design',
    description: 'Creating beautiful, user-friendly interfaces with HTML, CSS, Tailwind, and React components.',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description: 'Designing RESTful APIs, database schemas, and server-side logic with Node.js and Express.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Ensuring websites look and work perfectly across all devices — mobile, tablet, and desktop.',
  },
  {
    icon: BookOpen,
    title: 'Always Learning',
    description: 'Continuously expanding my skill set — exploring new frameworks, tools, and best practices.',
  },
  {
    icon: Zap,
    title: 'Performance Focus',
    description: 'Writing efficient, fast-loading code with attention to optimization and user experience.',
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      'Abhi built our college event website in record time. Clean design, fast, and exactly what we needed. Highly recommend!',
    name: 'Priya Sharma',
    title: 'Event Coordinator, JECRC',
  },
  {
    quote:
      'Working with Abhi was great. He understood our requirements quickly and delivered a polished web app ahead of schedule.',
    name: 'Rahul Verma',
    title: 'Project Mentor',
  },
  {
    quote:
      'Abhi\'s passion for web development shows in every project. His code is clean and his designs are always on point.',
    name: 'Anjali Gupta',
    title: 'Classmate & Collaborator',
  },
] as const;
