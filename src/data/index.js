// ─── Projects ───────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'ShopVerse — E-Commerce Platform',
    description: 'Full-stack MERN e-commerce app with JWT auth, Stripe payments, admin dashboard, real-time inventory, and cart management.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&q=80',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
    category: 'Full Stack',
    github: 'https://github.com/tripti',
    live: 'https://shopverse.demo.com',
    featured: true,
  },
  {
    id: 2,
    title: 'DevConnect — Dev Social Network',
    description: 'LinkedIn-style social network for developers with profiles, posts, GitHub integration, and real-time notifications.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'Full Stack',
    github: 'https://github.com/tripti',
    live: 'https://devconnect.demo.com',
    featured: true,
  },
  {
    id: 3,
    title: 'TaskFlow — Project Management',
    description: 'Kanban-style project manager with drag-and-drop, team collaboration, deadline tracking, and analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?w=600&q=80',
    tech: ['React', 'Tailwind', 'Node.js', 'MongoDB', 'DnD Kit'],
    category: 'Full Stack',
    github: 'https://github.com/tripti',
    live: 'https://taskflow.demo.com',
    featured: false,
  },
  {
    id: 4,
    title: 'CryptoTracker — Web3 Dashboard',
    description: 'Real-time cryptocurrency tracker using CoinGecko API with portfolio management, wallet connect via MetaMask, and price alerts.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80',
    tech: ['React', 'Web3.js', 'ethers.js', 'MetaMask', 'CoinGecko API'],
    category: 'Web3',
    github: 'https://github.com/tripti',
    live: 'https://cryptotracker.demo.com',
    featured: true,
  },
  {
    id: 5,
    title: 'PortfolioCraft — Portfolio Builder',
    description: 'Drag-and-drop portfolio builder SaaS that generates beautiful portfolio sites. Built with React and deployed via Vercel.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
    tech: ['React', 'Next.js', 'Tailwind', 'Vercel', 'Framer Motion'],
    category: 'Frontend',
    github: 'https://github.com/tripti',
    live: 'https://portfoliocraft.demo.com',
    featured: false,
  },
  {
    id: 6,
    title: 'SecureAPI — Backend Auth System',
    description: 'Production-grade REST API with JWT + refresh tokens, OAuth2, role-based access control, rate limiting, and full Swagger docs.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'OAuth2', 'Swagger'],
    category: 'Backend',
    github: 'https://github.com/tripti',
    live: null,
    featured: false,
  },
];

// ─── Skills ─────────────────────────────────────────────────────────
export const skills = [
  { name: 'HTML5', level: 95, icon: 'html', category: 'Frontend' },
  { name: 'CSS3', level: 88, icon: 'css', category: 'Frontend' },
  { name: 'JavaScript', level: 85, icon: 'js', category: 'Frontend' },
  { name: 'React.js', level: 88, icon: 'react', category: 'Frontend' },
  { name: 'Next.js', level: 72, icon: 'next', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, icon: 'tailwind', category: 'Frontend' },
  { name: 'Redux', level: 75, icon: 'redux', category: 'Frontend' },
  { name: 'Node.js', level: 80, icon: 'node', category: 'Backend' },
  { name: 'Express.js', level: 82, icon: 'express', category: 'Backend' },
  { name: 'MongoDB', level: 78, icon: 'mongo', category: 'Backend' },
  { name: 'REST APIs', level: 85, icon: 'api', category: 'Backend' },
  { name: 'JWT Auth', level: 80, icon: 'jwt', category: 'Backend' },
  { name: 'Git & GitHub', level: 85, icon: 'git', category: 'Tools' },
  { name: 'Web3 Basics', level: 55, icon: 'web3', category: 'Web3' },
];

// ─── Stats ──────────────────────────────────────────────────────────
export const stats = [
  { label: 'Projects Completed', value: '20+', icon: 'code' },
  { label: 'Technologies', value: '14+', icon: 'layers' },
  { label: 'Months Experience', value: '18+', icon: 'briefcase' },
  { label: 'Certifications', value: '6+', icon: 'award' },
];

// ─── Services ───────────────────────────────────────────────────────
export const services = [
  {
    title: 'Full Stack Development',
    desc: 'End-to-end web applications using MERN stack with clean architecture, scalable APIs, and production deployment.',
    icon: 'monitor',
    gradient: 'from-violet-500 to-indigo-500',
  },
  {
    title: 'Frontend Development',
    desc: 'Pixel-perfect React.js UIs with animations, responsive design, and modern component architecture.',
    icon: 'layout',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Backend APIs',
    desc: 'RESTful APIs with Node.js/Express, JWT authentication, rate limiting, validation, and Swagger documentation.',
    icon: 'server',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Responsive UI Design',
    desc: 'Mobile-first, fully responsive UIs with modern glassmorphism, gradients, and accessibility standards.',
    icon: 'smartphone',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'Portfolio Websites',
    desc: 'Professional, SEO-optimized portfolio sites that help you stand out and convert visitors to opportunities.',
    icon: 'user',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Web App Development',
    desc: 'Feature-rich web apps with dashboards, real-time features, and integrations — from MVP to production.',
    icon: 'globe',
    gradient: 'from-green-500 to-emerald-500',
  },
];

// ─── Timeline / Journey ──────────────────────────────────────────────
export const timeline = [
  {
    year: '2022',
    title: 'Started the Journey',
    desc: 'Began learning HTML, CSS, JavaScript, and fundamentals of web development. Built first static websites.',
    type: 'learning',
  },
  {
    year: '2023',
    title: 'React & MERN Stack',
    desc: 'Dived deep into React.js, Node.js, MongoDB. Completed multiple full-stack projects and freelance work.',
    type: 'milestone',
  },
  {
    year: '2023',
    title: 'Internship',
    desc: 'Completed a 6-month internship as a React Developer. Worked on production-grade SaaS dashboards and APIs.',
    type: 'work',
  },
  {
    year: '2024',
    title: 'Advanced Projects',
    desc: 'Built ShopVerse (e-commerce), DevConnect (social network), and CryptoTracker (Web3 dashboard).',
    type: 'project',
  },
  {
    year: '2024',
    title: 'Certifications',
    desc: 'Completed certifications in Full Stack Web Dev (Coursera), MongoDB for Developers, and Web3 Fundamentals.',
    type: 'certification',
  },
  {
    year: '2025',
    title: 'Web3 & Freelance',
    desc: 'Exploring blockchain development, smart contracts with Solidity, and expanding freelance portfolio.',
    type: 'current',
  },
];

// ─── Testimonials ────────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: 'Arjun Mehta',
    role: 'CTO, TechSprint Pvt Ltd',
    text: "Tripti delivered our e-commerce platform on time and beyond expectations. Her MERN stack expertise and attention to detail are impressive. The codebase is clean, scalable, and well-documented.",
    rating: 5,
    avatar: 'AM',
    color: 'bg-violet-500',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Founder, DesignHive Studio',
    text: "She built our portfolio website and it looks absolutely stunning. Tripti understood our brand vision perfectly and translated it into a beautiful, fast-loading website. Highly recommended!",
    rating: 5,
    avatar: 'PS',
    color: 'bg-pink-500',
  },
  {
    id: 3,
    name: 'Rohan Verma',
    role: 'Product Manager, CloudBase',
    text: "Tripti's frontend skills are top-notch. She revamped our SaaS dashboard UI with React — performance improved 40% and user satisfaction scores went up significantly.",
    rating: 5,
    avatar: 'RV',
    color: 'bg-blue-500',
  },
  {
    id: 4,
    name: 'Sneha Gupta',
    role: 'Startup Founder, EdTechPro',
    text: "Working with Tripti was a great experience. She built our backend APIs with Node.js, handled auth with JWT, and integrated third-party APIs seamlessly. Very professional!",
    rating: 5,
    avatar: 'SG',
    color: 'bg-teal-500',
  },
];

export const navLinks = [
  { name: 'Home', href: 'hero' },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Services', href: 'services' },
  { name: 'Journey', href: 'journey' },
  { name: 'Contact', href: 'contact' },
];
