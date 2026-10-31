// Single source of truth for all portfolio content.
// Fields marked TODO are placeholders: anything left empty ('' or null) is hidden
// in the UI instead of rendering a fake link.

export const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

export const profile = {
  name: 'Dev Mistry',
  initials: 'DM',
  title: 'Full Stack Web & App Developer',
  roles: [
    'Full Stack Web & App Developer',
    'AI/ML Engineer',
    'LLM & AI Agent Developer',
    'AI-Powered Automation',
  ],
  focusAreas: ['AI/ML', 'LLM', 'AI Agents', 'Automation'],
  headline: 'Building Modern Web, Mobile & AI-Powered Applications.',
  description:
    'I build scalable web applications, cross-platform mobile apps and intelligent AI-powered solutions using modern technologies and innovative engineering practices.',
  location: 'Gujarat, India',
  email: 'devjangid788@gmail.com',
  photo: '/images/profile.webp',
  // Floating glass badges around the hero portrait (tech ids from `technologies`)
  heroBadges: [
    { tech: 'reactnative', label: 'Web & App' },
    { tech: 'claude', label: 'AI Agents' },
    { tech: 'n8n', label: 'Automation' },
  ],
  resume: '/resume/Dev-Mistry-Resume.pdf', // generated from resume/resume.html with `npm run resume`
  resumePreview: '/resume/resume-preview.webp',
  resumeUpdated: 'October 2026',
};

export const socialLinks = {
  github: 'https://github.com/mistrydev780',
  linkedin: 'https://www.linkedin.com/in/mistrydev780/',
};

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#tech-skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export const about = {
  paragraphs: [
    'I am Dev Mistry, a developer focused on Full Stack Web Development, Mobile Application Development and Artificial Intelligence.',
    'My technical interests include building scalable applications, designing backend architectures, developing cross-platform mobile apps and integrating intelligent AI solutions using modern LLM technologies.',
    'I enjoy exploring emerging technologies, solving real-world problems and continuously improving my engineering skills.',
    'My development approach focuses on clean code, maintainable architecture, user experience and practical business value.',
  ],
  focus: [
    {
      name: 'Full Stack Web Development',
      detail: 'Scalable web applications with React, Next.js, Node.js and PostgreSQL.',
    },
    {
      name: 'Mobile App Development',
      detail: 'Cross-platform mobile apps with React Native and Expo.',
    },
    {
      name: 'Backend Engineering',
      detail: 'REST APIs, authentication, role-based access and database design.',
    },
    {
      name: 'AI, LLMs & Agents',
      detail: 'LLM-powered features, retrieval-augmented generation and AI agents.',
    },
    {
      name: 'Business Automation',
      detail: 'n8n workflows that connect Gmail, Google Sheets and Telegram.',
    },
  ],
};

// Logo registry. `logo` is a file in public/images/tech; null renders a text label.
export const technologies = {
  javascript: { name: 'JavaScript', logo: 'javascript' },
  typescript: { name: 'TypeScript', logo: 'typescript' },
  python: { name: 'Python', logo: 'python' },
  java: { name: 'Java', logo: 'java' },
  c: { name: 'C', logo: 'c' },
  cplusplus: { name: 'C++', logo: 'cplusplus' },
  sql: { name: 'SQL', logo: null },
  html5: { name: 'HTML5', logo: 'html5' },
  css3: { name: 'CSS3', logo: 'css3' },
  react: { name: 'React', logo: 'react' },
  nextjs: { name: 'Next.js', logo: 'nextjs' },
  reactnative: { name: 'React Native', logo: 'reactnative' },
  expo: { name: 'Expo', logo: 'expo' },
  nodejs: { name: 'Node.js', logo: 'nodejs' },
  express: { name: 'Express.js', logo: 'express' },
  nestjs: { name: 'NestJS', logo: 'nestjs' },
  flask: { name: 'Flask', logo: 'flask' },
  tailwindcss: { name: 'Tailwind CSS', logo: 'tailwindcss' },
  sass: { name: 'Sass', logo: 'sass' },
  postgresql: { name: 'PostgreSQL', logo: 'postgresql' },
  mongodb: { name: 'MongoDB', logo: 'mongodb' },
  mysql: { name: 'MySQL', logo: 'mysql' },
  redis: { name: 'Redis', logo: 'redis' },
  prisma: { name: 'Prisma', logo: 'prisma' },
  typeorm: { name: 'TypeORM', logo: 'typeorm' },
  nextauth: { name: 'NextAuth.js', logo: null },
  openai: { name: 'OpenAI', logo: 'openai' },
  claude: { name: 'Anthropic Claude', logo: 'claude' },
  gemini: { name: 'Google Gemini', logo: 'gemini' },
  groq: { name: 'Groq', logo: 'groq' },
  huggingface: { name: 'Hugging Face', logo: 'huggingface' },
  langchain: { name: 'LangChain', logo: 'langchain' },
  llamaindex: { name: 'LlamaIndex', logo: 'llamaindex' },
  llama: { name: 'Llama', logo: 'meta' },
  openrouter: { name: 'OpenRouter', logo: 'openrouter' },
  scalekit: { name: 'ScaleKit', logo: null },
  redux: { name: 'Redux Toolkit', logo: 'redux' },
  firebase: { name: 'Firebase', logo: 'firebase' },
  vite: { name: 'Vite', logo: 'vite' },
  razorpay: { name: 'Razorpay', logo: 'razorpay' },
  jwt: { name: 'JWT', logo: 'jwt' },
  threejs: { name: 'Three.js', logo: 'threejs' },
  qdrant: { name: 'Qdrant', logo: 'qdrant' },
  aimodels: { name: 'AI Models', logo: null },
  docker: { name: 'Docker', logo: 'docker' },
  git: { name: 'Git', logo: 'git' },
  github: { name: 'GitHub', logo: 'github' },
  githubactions: { name: 'GitHub Actions', logo: 'githubactions' },
  aws: { name: 'AWS', logo: 'aws' },
  azure: { name: 'Microsoft Azure', logo: 'azure' },
  linux: { name: 'Linux', logo: 'linux' },
  n8n: { name: 'n8n', logo: 'n8n' },
  vercel: { name: 'Vercel', logo: 'vercel' },
  gmail: { name: 'Gmail', logo: 'gmail' },
  googlesheets: { name: 'Google Sheets', logo: 'googlesheets' },
  telegram: { name: 'Telegram', logo: 'telegram' },
  postman: { name: 'Postman', logo: 'postman' },
  selenium: { name: 'Selenium', logo: 'selenium' },
  vscode: { name: 'VS Code', logo: 'vscode' },
  npm: { name: 'npm', logo: 'npm' },
  chrome: { name: 'Chrome DevTools', logo: 'chrome' },
};

export const techLogoSrc = (id) => {
  const tech = technologies[id];
  return tech && tech.logo ? asset(`/images/tech/${tech.logo}.svg`) : null;
};

// White logos that light mode inverts (see .logo-mono in theme-light.css)
const MONO_LOGOS = new Set([
  'nextjs', 'express', 'flask', 'prisma', 'expo', 'github', 'vercel', 'openai', 'groq', 'aws',
  'openrouter', 'jwt', 'threejs',
]);

export const logoClass = (id) => (MONO_LOGOS.has(id) ? 'logo-mono' : '');

// Expertise chip names that don't exactly match a technology name above
const TECH_ALIASES = {
  'React.js': 'react',
  SASS: 'sass',
  'Prisma ORM': 'prisma',
  'OpenAI GPT Models': 'openai',
  'OpenAI API': 'openai',
  'Claude AI': 'claude',
  'Claude Code': 'claude',
  'Gemini API': 'gemini',
  'Llama Models': 'llama',
  Azure: 'azure',
  'Gmail Integration': 'gmail',
  'Google Sheets Integration': 'googlesheets',
  'Telegram Integration': 'telegram',
};

// Technology id for an expertise chip, or undefined when the item is a concept (e.g. "REST APIs")
export const techIdForSkill = (name) =>
  TECH_ALIASES[name] ||
  Object.keys(technologies).find((key) => technologies[key].name.toLowerCase() === name.toLowerCase());

// Experience levels shown in the expertise cards. TODO: review each item's level.
export const levels = {
  'hands-on': 'Hands-on development',
  integration: 'Integration experience',
  learning: 'Currently learning',
};

const item = (name, level = 'hands-on') => ({ name, level });

export const expertise = [
  {
    id: 'web',
    icon: 'code',
    title: 'Full Stack Web Development',
    highlight: 'End-to-end web applications, from responsive interfaces to secure, well-structured APIs.',
    items: [
      item('React.js'), item('Next.js'), item('JavaScript'), item('TypeScript'),
      item('HTML5'), item('CSS3'), item('SASS'), item('Tailwind CSS'),
      item('Node.js'), item('Express.js'), item('REST APIs'), item('Authentication'),
      item('JWT'), item('Cookies'), item('Prisma ORM'), item('TypeORM'),
    ],
  },
  {
    id: 'mobile',
    icon: 'smartphone',
    title: 'Mobile App Development',
    highlight:
      'Building modern cross-platform mobile applications with reusable components, API integration and responsive mobile interfaces.',
    items: [
      item('React Native'), item('Expo'), item('JavaScript'), item('TypeScript'),
      item('React'), item('REST API Integration'), item('Mobile UI Development'),
      item('Cross-platform Development'),
    ],
  },
  {
    id: 'backend',
    icon: 'server',
    title: 'Backend Development',
    highlight: 'Reliable server-side systems with clean data models, secure authentication and access control.',
    items: [
      item('Node.js'), item('Express.js'), item('Python'), item('Flask'),
      item('PostgreSQL'), item('MongoDB'), item('MySQL'), item('Prisma'),
      item('TypeORM'), item('SQL'), item('REST APIs'), item('JWT Authentication'),
      item('Role-Based Access Control'),
    ],
  },
  {
    id: 'ai-ml',
    icon: 'cpu',
    title: 'Artificial Intelligence & Machine Learning',
    featured: true,
    highlight: 'Bringing AI into real products, from prompt design and model integration to semantic search.',
    items: [
      item('Artificial Intelligence', 'integration'), item('Generative AI'),
      item('Prompt Engineering'), item('Model Integration'), item('AI-powered Applications'),
      item('Embeddings', 'integration'), item('Vector Search', 'integration'),
      item('Machine Learning', 'learning'), item('Deep Learning', 'learning'),
      item('Natural Language Processing', 'learning'),
    ],
  },
  {
    id: 'llm',
    icon: 'message',
    title: 'Large Language Models (LLMs)',
    featured: true,
    highlight: 'Designing LLM-powered features with retrieval, tool calling and careful context management.',
    items: [
      item('OpenAI GPT Models', 'integration'), item('Anthropic Claude', 'integration'),
      item('Google Gemini', 'integration'), item('Groq', 'integration'),
      item('Retrieval-Augmented Generation (RAG)', 'integration'),
      item('Vector Databases', 'integration'), item('Qdrant', 'integration'),
      item('Semantic Search', 'integration'), item('Embeddings', 'integration'),
      item('Context Management'), item('Tool Calling'),
      item('LangChain', 'learning'), item('LlamaIndex', 'learning'),
      item('Hugging Face', 'learning'), item('Llama Models', 'learning'),
    ],
  },
  {
    id: 'agents',
    icon: 'zap',
    title: 'AI Agents & Automation',
    featured: true,
    highlight:
      'Intelligent agents that connect external services, process information and automate business workflows.',
    items: [
      item('Claude AI'), item('Claude Code'), item('OpenAI API', 'integration'),
      item('Gemini API', 'integration'), item('AI Agents'), item('Multi-step AI Workflows'),
      item('Tool Calling'), item('Function Calling'), item('n8n'), item('Workflow Automation'),
      item('Gmail Integration', 'integration'), item('Google Sheets Integration', 'integration'),
      item('Telegram Integration', 'integration'), item('Business Process Automation'),
    ],
  },
  {
    id: 'devops',
    icon: 'cloud',
    title: 'DevOps & Cloud Engineering',
    highlight: 'Shipping and running applications with version control, containers, CI/CD and cloud platforms.',
    items: [
      item('Git'), item('GitHub'), item('GitHub Actions'), item('Docker'), item('Linux'),
      item('AWS'), item('Azure', 'learning'), item('CI/CD'), item('Vercel'),
      item('Deployment'), item('Environment Configuration'), item('Production Debugging'),
    ],
  },
  {
    id: 'tools',
    icon: 'tool',
    title: 'Testing & Development Tools',
    highlight: 'Testing APIs and interfaces, debugging efficiently and keeping development workflows productive.',
    items: [
      item('Postman'), item('Selenium'), item('VS Code'), item('GitHub'), item('npm'),
      item('Chrome DevTools'), item('API Testing'), item('Debugging'),
    ],
  },
];

// Logo grid groups. `familiar: true` marks additional languages, not primary skills.
export const techStack = [
  {
    id: 'languages',
    icon: 'terminal',
    title: 'Programming Languages',
    items: [
      { id: 'javascript' }, { id: 'typescript' }, { id: 'python' }, { id: 'sql' },
      { id: 'html5' }, { id: 'css3' },
      { id: 'java', familiar: true }, { id: 'c', familiar: true },
      { id: 'cplusplus', familiar: true },
    ],
  },
  {
    id: 'frameworks',
    icon: 'layers',
    title: 'Frameworks & Libraries',
    items: [
      { id: 'react' }, { id: 'nextjs' }, { id: 'reactnative' }, { id: 'expo' },
      { id: 'nodejs' }, { id: 'express' }, { id: 'nestjs' }, { id: 'flask' },
      { id: 'tailwindcss' }, { id: 'sass' },
    ],
  },
  {
    id: 'databases',
    icon: 'database',
    title: 'Databases & ORMs',
    items: [
      { id: 'postgresql' }, { id: 'mongodb' }, { id: 'mysql' }, { id: 'redis' },
      { id: 'prisma' }, { id: 'typeorm' },
    ],
  },
  {
    id: 'ai',
    icon: 'cpu',
    title: 'AI & LLM Platforms',
    items: [
      { id: 'openai' }, { id: 'claude' }, { id: 'gemini' }, { id: 'groq' },
      { id: 'huggingface' }, { id: 'langchain' }, { id: 'llamaindex' }, { id: 'qdrant' },
    ],
  },
  {
    id: 'devops',
    icon: 'cloud',
    title: 'DevOps & Cloud',
    items: [
      { id: 'docker' }, { id: 'git' }, { id: 'github' }, { id: 'githubactions' },
      { id: 'aws' }, { id: 'azure' }, { id: 'linux' }, { id: 'vercel' },
    ],
  },
  {
    id: 'automation',
    icon: 'zap',
    title: 'Automation & Integrations',
    items: [{ id: 'n8n' }, { id: 'gmail' }, { id: 'googlesheets' }, { id: 'telegram' }],
  },
  {
    id: 'tools',
    icon: 'tool',
    title: 'Testing & Developer Tools',
    items: [
      { id: 'postman' }, { id: 'selenium' }, { id: 'vscode' }, { id: 'npm' }, { id: 'chrome' },
    ],
  },
];

// Project data comes from each repository's README on github.com/mistrydev780.
// status: 'live' (working demo), 'source' (code only), 'private' (professional work), 'development'
const repo = (name) => `https://github.com/mistrydev780/${name}`;

export const projects = [
  {
    id: 'ai-interviewiq',
    title: 'AI InterviewIQ',
    tagline: 'AI-Powered Interview Preparation Platform',
    category: 'AI Applications',
    icon: 'cpu',
    status: 'live',
    description:
      'A MERN interview preparation platform that simulates real technical interviews with AI: resume analysis, AI-generated questions, answer evaluation, scoring and personalised feedback.',
    features: [
      'AI resume analysis',
      'AI-generated interview questions',
      'AI answer evaluation & scoring',
      'Personalised feedback',
      'Interview history & tracking',
      'Secure JWT authentication',
    ],
    tech: ['react', 'redux', 'tailwindcss', 'nodejs', 'express', 'mongodb', 'openai', 'gemini', 'openrouter'],
    image: '/images/projects/interviewiq.webp',
    github: repo('Ai-Interview-Preparation-Platform'),
    demo: 'https://ai2interviewiq-client.onrender.com/',
  },
  {
    id: 'ai-customer-support-saas',
    title: 'AI Customer Support SaaS',
    tagline: 'AI Chatbot Platform for Businesses',
    category: 'AI Applications',
    icon: 'message',
    status: 'live',
    description:
      'A full-stack SaaS platform that lets businesses create, customise and embed AI customer support chatbots on their websites, with live preview and a SaaS dashboard.',
    features: [
      'AI chatbot creation & customisation',
      'Website embedding system',
      'Live chatbot preview',
      'Context-aware AI responses',
      'Dashboard analytics & usage monitoring',
      'ScaleKit authentication',
    ],
    tech: ['nextjs', 'react', 'typescript', 'tailwindcss', 'nodejs', 'express', 'mongodb', 'scalekit', 'openai', 'gemini'],
    image: '/images/projects/support-saas.webp',
    github: repo('AI-Customer-Support-SaaS-Platform'),
    demo: 'https://ai-customer-support-saa-s-platform.vercel.app/',
  },
  {
    id: 'ai-mern-ecommerce',
    title: 'AI MERN E-Commerce',
    tagline: 'AI-Powered Shopping Platform',
    category: 'Full Stack Web',
    icon: 'layers',
    status: 'source',
    description:
      'A full-stack MERN e-commerce platform with a shopping experience, admin dashboard, Razorpay payments and AI-powered product recommendations.',
    features: [
      'Cart, wishlist & orders',
      'Razorpay payment integration',
      'Admin dashboard & inventory',
      'Sales analytics',
      'AI product recommendations',
      'JWT authentication',
    ],
    tech: ['react', 'redux', 'tailwindcss', 'nodejs', 'express', 'mongodb', 'razorpay', 'jwt'],
    image: null,
    github: repo('Ai-MERN-Dev-E-Commerce-Master'),
    demo: '',
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    tagline: 'Employee Task Management Platform',
    category: 'Full Stack Web',
    icon: 'grid',
    status: 'live',
    description:
      'A MERN workforce productivity platform for assigning tasks, tracking deadlines and monitoring team workflow through employee and admin dashboards.',
    features: [
      'Task assignment workflow',
      'Task status & deadline tracking',
      'Employee management',
      'Productivity monitoring',
      'Admin & employee dashboards',
      'Secure JWT authentication',
    ],
    tech: ['react', 'tailwindcss', 'nodejs', 'express', 'mongodb', 'jwt'],
    image: '/images/projects/taskflow.webp',
    github: repo('TaskFlow-Management-Platform'),
    demo: 'https://employee-task-management-system-1-jolj.onrender.com/',
  },
  {
    id: 'employee-management',
    title: 'Employee Management System',
    tagline: 'Workforce Management Platform',
    category: 'Full Stack Web',
    icon: 'server',
    status: 'live',
    description:
      'A MERN employee management platform for managing staff records, assigning tasks and tracking performance with analytics dashboards.',
    features: [
      'Employee CRUD management',
      'Task assignment',
      'Performance monitoring',
      'Department overview',
      'Analytics dashboard',
      'Secure authentication',
    ],
    tech: ['react', 'tailwindcss', 'nodejs', 'express', 'mongodb', 'jwt'],
    image: '/images/projects/ems.webp',
    github: repo('Employee-Management-System-Master'),
    demo: 'https://employee-management-system-2-u26t.onrender.com',
  },
  {
    id: 'firecheck',
    title: 'FireCheck',
    tagline: 'Fire Safety Compliance SaaS',
    category: 'Full Stack Web',
    icon: 'code',
    status: 'private',
    description:
      'A fire safety compliance platform designed to support engineering assessments, regulatory documentation and structured review workflows.',
    features: [
      'Authentication',
      'Role-based access',
      'Compliance workflows',
      'Engineering reviews',
      'Report management',
      'Document handling',
    ],
    tech: ['nextjs', 'typescript', 'prisma', 'postgresql', 'nextauth'],
    image: null,
    github: '',
    demo: '',
  },
  {
    id: 'tfy-integration-layer',
    title: 'TFY Integration Layer',
    tagline: 'Integration & Automation Platform',
    category: 'Automation & Integrations',
    icon: 'layers',
    status: 'private',
    description:
      'An integration platform designed to connect external services, manage integrations and support webhook-driven workflows.',
    features: [
      'Integration management',
      'Webhook processing',
      'API integrations',
      'Connector architecture',
      'Admin dashboard',
      'Event handling',
    ],
    tech: ['nestjs', 'prisma', 'postgresql', 'nextjs', 'typescript'],
    image: null,
    github: '',
    demo: '',
  },
  {
    id: 'tupple-ai-assistant',
    title: 'Tupple Apps AI Assistant',
    tagline: 'AI Agents & Business Automation',
    category: 'Automation & Integrations',
    icon: 'zap',
    status: 'private',
    description:
      'An AI-powered business assistant designed to support lead management and workflow automation through connected services.',
    features: [
      'AI-assisted workflows',
      'Gmail integration',
      'Google Sheets integration',
      'Telegram integration',
      'Lead management automation',
    ],
    tech: ['n8n', 'aimodels', 'gmail', 'googlesheets', 'telegram'],
    image: null,
    github: '',
    demo: '',
  },
  {
    id: 'devnova-ai',
    title: 'DevNova AI',
    tagline: 'AI Voice Agent',
    category: 'AI Applications',
    icon: 'cpu',
    status: 'development',
    description:
      'An AI voice agent application in active development, with a React and Vite frontend and an Express and MongoDB backend secured with JWT authentication.',
    features: [
      'AI voice agent experience',
      'React + Vite frontend',
      'Firebase integration',
      'JWT cookie authentication',
      'Express REST backend',
      'MongoDB data layer',
    ],
    tech: ['react', 'vite', 'tailwindcss', 'firebase', 'nodejs', 'express', 'mongodb', 'jwt'],
    image: null,
    github: repo('DevNova-AI'),
    demo: '',
  },
  {
    id: 'portfolio',
    title: 'Dev Mistry Portfolio',
    tagline: '3D Developer Portfolio',
    category: 'Full Stack Web',
    icon: 'code',
    status: 'live',
    description:
      'This portfolio: a React site with an interactive Three.js particle field, dark and light themes, data-driven sections and a working contact form.',
    features: [
      'Three.js / React Three Fiber scene',
      'Dark & light themes',
      'Data-driven content',
      'Accessible & responsive',
      'Code-split 3D for fast loads',
      'Web3Forms contact form',
    ],
    tech: ['react', 'threejs', 'javascript', 'css3', 'vercel'],
    image: '/images/projects/portfolio.webp',
    github: '', // TODO: add once this portfolio's repository is on github.com/mistrydev780
    demo: 'https://devmistry780.vercel.app',
  },
];

// Dates are 'YYYY-MM'; `end: null` means present. Durations are calculated at runtime.
export const experience = [
  {
    id: 'tupple-apps',
    title: 'Full Stack Developer',
    company: 'Tupple Apps',
    location: 'Surat, Gujarat, India',
    start: '2026-08',
    end: null,
    type: 'Current Role',
    description:
      'Full Stack Developer working with React.js, Next.js, Node.js, Express.js, PostgreSQL and MongoDB. Building responsive web applications, REST APIs and database integrations, and delivering scalable software solutions with Git and GitHub.',
    achievements: [],
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Git', 'GitHub'],
  },
  {
    id: 'upgrowth-infotech',
    title: 'Full Stack Developer',
    company: 'UpGrowth Infotech',
    location: 'Bardoli, Gujarat, India · On-site',
    start: '2025-11',
    end: '2026-04',
    type: 'Part-time',
    description: 'Built responsive full-stack web applications and REST APIs on real-world projects.',
    achievements: [
      'Developed responsive full-stack web applications using React.js, Node.js, Express.js and MongoDB.',
      'Built REST APIs and implemented authentication using JWT.',
      'Worked on database design, CRUD operations and API integrations.',
      'Collaborated on real-world projects following industry best practices.',
      'Improved application performance and user experience through optimised frontend and backend development.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
  },
];

export const education = [
  {
    id: 'mca',
    title: 'Master of Computer Applications (MCA)',
    institution: 'Gujarat Technological University (GTU), Ahmedabad',
    start: '2026-07',
    end: '2028-07',
    type: 'Pursuing',
    description:
      'Currently pursuing an MCA focused on Full Stack Development, Artificial Intelligence, Generative AI, Agentic AI, Cloud Computing and Software Engineering.',
    tags: ['Full Stack Development', 'Artificial Intelligence', 'Generative AI', 'Agentic AI', 'Cloud Computing', 'Software Engineering'],
  },
  {
    id: 'bca',
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'Veer Narmad South Gujarat University (VNSGU), Surat',
    start: '2023-05',
    end: '2026-06',
    type: 'Completed',
    grade: 'First Class Distinction',
    description:
      'Completed BCA with First Class Distinction, building multiple full-stack and AI-powered applications including AI InterviewIQ, AI Customer Support SaaS and Employee Management SaaS.',
    tags: ['Web Development', 'MERN Stack Development', 'AI Projects', 'Coding', 'Software Development'],
  },
];

export const currentRole = experience.find((role) => role.end === null);

// Inclusive month count between 'YYYY-MM' dates (end null = this month), like LinkedIn
export const monthsBetween = (start, end) => {
  const [fromYear, fromMonth] = start.split('-').map(Number);
  const now = new Date();
  const [toYear, toMonth] = end ? end.split('-').map(Number) : [now.getFullYear(), now.getMonth() + 1];
  return (toYear - fromYear) * 12 + (toMonth - fromMonth) + 1;
};

export const totalExperienceMonths = () =>
  experience.reduce((total, role) => total + monthsBetween(role.start, role.end), 0);
