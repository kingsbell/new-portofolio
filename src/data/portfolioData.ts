import type { ProfileData, Project, TechItem, ExperienceItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Soleh Wahyu Pratama',
  tagline: 'Quality Assurance Engineer',
  education: 'Informatics Engineering • Informatics and Business University of Indonesia',
  status: 'Available for QA & Testing Roles',
  bio: 'Informatics engineering undergraduate passionate about software quality and reliability. Experienced in designing and executing automated test suites, performing API and regression testing, and collaborating in agile teams to ship bug-free products.',
  experienceStart: 'Active QA Engineer',
  avatarUrl: '/avatar.svg',
  interests: [
    'E2E Testing Automation',
    'Test Automation',
    'API Testing',
    'Performance Testing',
    'Agile & Scrum',
    'Software Reliability'
  ],
  contact: {
    email: 'solehwahyup5@gmail.com',
    github: 'https://github.com/kingsbell',
    linkedin: 'https://linkedin.com/in/soleh-wahyu-p-50a76a201',
    location: 'Indonesia'
  }
};

export const techStackData: TechItem[] = [
  // client interface layer
  {
    name: 'TypeScript',
    category: 'frontend',
    layer: 'client',
    iconKey: 'typescript',
    color: '#3178C6',
    roleTag: 'Type Contracts',
    usageContext: 'Type-safe contracts across full-stack applications and component props',
    projectLinks: ['cimart', 'kalorin-ai']
  },
  {
    name: 'React',
    category: 'frontend',
    layer: 'client',
    iconKey: 'react',
    color: '#0284c7',
    roleTag: 'Component UI',
    usageContext: 'Component-driven UI, state management, custom hooks, and interactive flows',
    projectLinks: ['cimart', 'kalorin-ai']
  },
  {
    name: 'Next.js',
    category: 'frontend',
    layer: 'client',
    iconKey: 'nextdotjs',
    color: '#0f172a',
    roleTag: 'App Framework',
    usageContext: 'Server-side rendering, static generation, and edge routing',
    projectLinks: ['cimart']
  },
  {
    name: 'Flutter',
    category: 'mobile',
    layer: 'client',
    iconKey: 'flutter',
    color: '#0284c7',
    roleTag: 'Native Mobile',
    usageContext: 'Cross-platform native mobile apps for iOS and Android with 60fps reactive UI',
    projectLinks: ['villanakey']
  },
  {
    name: 'Tailwind CSS v4',
    category: 'frontend',
    layer: 'client',
    iconKey: 'tailwindcss',
    color: '#06b6d4',
    roleTag: 'Design Tokens',
    usageContext: 'Modern utility-first styling, design tokens, and fluid responsive layouts',
    projectLinks: ['cimart', 'kalorin-ai']
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    layer: 'client',
    iconKey: 'javascript',
    color: '#eab308',
    roleTag: 'Scripting Core',
    usageContext: 'Core web scripting, DOM events, and asynchronous event loops',
    projectLinks: ['cimart']
  },

  // backend engine layer
  {
    name: 'Laravel',
    category: 'backend',
    layer: 'backend',
    iconKey: 'laravel',
    color: '#ef4444',
    roleTag: 'MVC & REST Engine',
    usageContext: 'Robust REST APIs, Inertia backend routing, authentication, and transaction handling',
    projectLinks: ['cimart']
  },
  {
    name: 'Node.js',
    category: 'backend',
    layer: 'backend',
    iconKey: 'nodejs',
    color: '#22c55e',
    roleTag: 'Server Runtime',
    usageContext: 'High-throughput microservices, real-time WebSockets, and build automation tooling',
    projectLinks: ['kalorin-ai']
  },

  // database and cloud persistence layer
  {
    name: 'PostgreSQL',
    category: 'backend',
    layer: 'database',
    iconKey: 'postgresql',
    color: '#2563eb',
    roleTag: 'Relational Core',
    usageContext: 'Relational data modeling, complex queries, indexing, and transactional integrity',
    projectLinks: ['kalorin-ai']
  },
  {
    name: 'Supabase',
    category: 'backend',
    layer: 'database',
    iconKey: 'supabase',
    color: '#10b981',
    roleTag: 'Cloud Postgres & Auth',
    usageContext: 'Managed Postgres backend, row-level security policies, real-time subscriptions, and auth',
    projectLinks: ['kalorin-ai']
  },
  {
    name: 'MySQL',
    category: 'backend',
    layer: 'database',
    iconKey: 'mysql',
    color: '#0284c7',
    roleTag: 'Transactional DB',
    usageContext: 'E-commerce relational database schemas, ACID transactions, and optimized indexing',
    projectLinks: ['cimart']
  },
  {
    name: 'Firebase',
    category: 'backend',
    layer: 'database',
    iconKey: 'firebase',
    color: '#f59e0b',
    roleTag: 'NoSQL & Real-Time Sync',
    usageContext: 'Cloud Firestore real-time calendar syncing, FCM push notifications, and Auth',
    projectLinks: ['villanakey', 'cimart']
  },
  {
    name: 'Prisma ORM',
    category: 'backend',
    layer: 'database',
    iconKey: 'prisma',
    color: '#6366f1',
    roleTag: 'Type-Safe ORM',
    usageContext: 'Type-safe database migrations, declarative schema modeling, and optimized queries',
    projectLinks: ['kalorin-ai']
  },

  // infrastructure and devops layer
  {
    name: 'Linux',
    category: 'tools',
    layer: 'devops',
    iconKey: 'linux',
    color: '#eab308',
    roleTag: 'System OS',
    usageContext: 'Primary Unix environment, Bash scripting, system service management, and workflow',
    projectLinks: ['cimart', 'villanakey', 'kalorin-ai']
  },
  {
    name: 'Docker',
    category: 'tools',
    layer: 'devops',
    iconKey: 'docker',
    color: '#0284c7',
    roleTag: 'Containerization',
    usageContext: 'Containerized deployment, multi-stage builds, and consistent staging environments',
    projectLinks: ['cimart']
  },
  {
    name: 'Git',
    category: 'tools',
    layer: 'devops',
    iconKey: 'git',
    color: '#f97316',
    roleTag: 'Version Control',
    usageContext: 'Version control, feature branching workflows, code reviews, and CI/CD pipelines',
    projectLinks: ['cimart', 'villanakey', 'kalorin-ai']
  },
  {
    name: 'Vercel',
    category: 'tools',
    layer: 'devops',
    iconKey: 'vercel',
    color: '#0f172a',
    roleTag: 'Edge Deployment',
    usageContext: 'Edge deployment, continuous integration, and global CDN delivery for web apps',
    projectLinks: ['kalorin-ai']
  }
];

export const projectsData: Project[] = [
  {
    id: 'reusely',
    title: 'Reusely',
    subtitle: 'QA Automation for the Reusely.com Recommerce Platform',
    category: 'qa',
    summary: 'Safeguarding quality across every Reusely app, a recommerce platform for buying, selling, and trading in used devices, with 1200+ automated test cases.',
    description: 'Working as a QA Engineer at Reusely since June 2025, responsible for testing the entire application suite. From end-to-end automation, API testing, and load testing to bug reporting, all of it runs inside the sprint cycle alongside the engineering team.',
    architecture: [
      'Playwright end-to-end suite covering every app with 1200+ test cases',
      'API testing and validation with Postman collections',
      'Load testing with k6 to measure endpoint performance',
      'Test suite versioned in Git alongside the application repositories',
      'Bug reporting and sprint tracking in ClickUp'
    ],
    stack: ['Playwright', 'Postman', 'k6', 'Git', 'ClickUp'],
    highlights: [
      'Automated testing across all apps with 1200+ test cases',
      'Found, reproduced, and reported bugs through to verified fixes',
      'Actively involved in every sprint, from planning to release testing'
    ],
    challenges: 'Keeping regression coverage relevant across every app while features keep changing each sprint.',
    role: 'QA Engineer (June 2025 - Present)',
    demoUrl: 'https://reusely.com',
    isPrivateRepo: true,
    privateRepoReason: 'Private company repository',
    imageUrl: '/projects/Reusely.png',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Test Cases', value: '1200+ Automated' },
      { label: 'E2E Framework', value: 'Playwright' },
      { label: 'Workflow', value: 'Sprint · ClickUp' }
    ]
  },
  {
    id: 'villanakey',
    title: 'villaNaKey',
    subtitle: 'Aplikasi Mobile Booking & Manajemen Reservasi Villa Keluarga',
    category: 'mobile',
    summary: 'Aplikasi mobile booking khusus untuk mendukung operasional bisnis hospitality villa pribadi keluarga dengan sinkronisasi kalender real-time tanpa risiko double-booking.',
    description: 'Dikembangkan sebagai proyek akhir kampus untuk mendigitalisasi pemesanan villa keluarga, mengeliminasi risiko double-booking, dan mempermudah pengecekan jadwal reservasi bagi pengelola dan tamu.',
    architecture: [
      'Aplikasi mobile multi-platform dibangun dengan Flutter dan Dart SDK',
      'Firebase Authentication untuk otentikasi aman pengelola dan tamu',
      'Cloud Firestore NoSQL real-time database untuk sinkronisasi instan jadwal reservasi',
      'Komponen custom calendar interaktif dengan highlight tanggal booking aktif'
    ],
    stack: [
      'Flutter',
      'Dart',
      'Firebase Auth',
      'Cloud Firestore',
      'Mobile Architecture'
    ],
    highlights: [
      'Digunakan langsung pada operasional villa pribadi keluarga',
      'Sinkronisasi status booking instan tanpa latency',
      'Kalender interaktif visual untuk kemudahan reservasi tanggal'
    ],
    challenges: 'Proyek aplikasi mobile pertama; mempelajari Flutter dan reaktif state management dari nol bersama kelompok di bawah tenggat waktu akademik yang ketat.',
    role: 'Mobile Developer & Technical Lead',
    githubUrl: 'https://github.com/solehwahyu/villanakey',
    isMobileApp: true,
    demoStatusLabel: 'Aplikasi Mobile Native (Demo/APK on request)',
    imageUrl: '/projects/villa.png',
    imageFit: 'contain',
    featured: true,
    metrics: [
      { label: 'Mobile Engine', value: 'Flutter & Dart' },
      { label: 'Database Sync', value: 'Real-Time NoSQL' },
      { label: 'State & Cloud', value: 'Firebase Suite' }
    ]
  },
  {
    id: 'kalorin-ai',
    title: 'kalorinAi',
    subtitle: 'Platform Web Nutrisi & Tracking Kalori Berbasis Computer Vision AI',
    category: 'fullstack',
    summary: 'Platform pelacak nutrisi cerdas dengan pengenalan citra piring makanan berbasis AI untuk menghitung kalori, makronutrien, serta rekomendasi harian.',
    description: 'Capstone Project Dicoding CodingCamp 2026 Powered by DBS Foundation yang dikembangkan bersama tim 6 orang (2 Data Analyst, 2 AI Engineer, 2 Fullstack). Fitur mencakup kalkulator BMI, tracking asupan harian, streak, insight AI, dan rekomendasi menu.',
    architecture: [
      'Client web modern menggunakan React, Vite, dan Tailwind CSS v4',
      'Database dan layer data menggunakan Supabase dan Prisma ORM',
      'Sistem otentikasi aman menggunakan Firebase Auth',
      'Pipeline computer vision TensorFlow/Keras di backend Python untuk mendeteksi porsi dan nilai gizi (kalori, protein, lemak, karbohidrat)',
      'Mesin rekomendasi harian adaptif berdasarkan target kalori pengguna'
    ],
    stack: [
      'React',
      'Vite',
      'Tailwind CSS v4',
      'TypeScript',
      'Supabase',
      'Prisma ORM',
      'Firebase Auth',
      'TensorFlow',
      'Python'
    ],
    highlights: [
      'Capstone Project Dicoding CodingCamp 2026 Powered by DBS Foundation',
      'Deteksi citra makanan otomatis untuk kalkulasi makronutrien instan',
      'Sistem insight harian dan rekomendasi personal berbasis AI'
    ],
    challenges: 'Menggarap seluruh arsitektur web dan integrasi API secara mandiri di tengah jadwal padat antara perkuliahan semester aktif dan bootcamp.',
    role: 'Lead Web Full-Stack Developer',
    githubUrl: 'https://github.com/solehwahyu/kalorin-ai',
    demoUrl: 'https://kalorin-ai.vercel.app',
    imageUrl: '/projects/kalorinLogo.png',
    imageFit: 'contain',
    featured: true,
    metrics: [
      { label: 'Capstone Team', value: '6 Engineers' },
      { label: 'AI Inference', value: 'TensorFlow CNN' },
      { label: 'Web Platform', value: 'React & Vite' }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'edu-widyatama',
    period: '2023 - Sekarang',
    role: 'S1 Teknik Informatika',
    organization: 'Universitas Widyatama (Angkatan 2023)',
    badge: 'Pendidikan Formal',
    category: 'education',
    description:
      'Menempuh studi sarjana Teknik Informatika dengan pendalaman fundamental ilmu komputer, struktur data, algoritma, rekayasa perangkat lunak, dan mengambil penjurusan spesialisasi Database / Data Analyst.',
    highlights: [
      'Penjurusan Database & Data Analyst',
      'Pemodelan Data Relasional & Optimasi Query SQL',
      'Fundamental Rekayasa Perangkat Lunak & Algoritma'
    ],
    tech: ['Database Systems', 'Data Analysis', 'SQL', 'Algorithms', 'Software Engineering', 'System Design']
  },
  {
    id: 'exp-dicoding-dbs',
    period: 'Feb 2026 - Jul 2026',
    role: 'Fullstack Developer (Learning Path)',
    organization: 'Dicoding CodingCamp 2026 Powered by DBS Foundation',
    badge: 'Intensive Bootcamp',
    category: 'bootcamp',
    description:
      'Program beasiswa pelatihan intensif Fullstack Developer dari Dicoding dan DBS Foundation. Membangun arsitektur frontend web modern (React & Vite), integrasi API backend type-safe, otentikasi data, dan berkolaborasi dalam Capstone Project kalorinAI.',
    highlights: [
      'Lulusan Jalur Fullstack Developer',
      'Integrasi REST API, State Management & Cloud DB',
      'Kolaborasi Tim Capstone Project kalorinAI'
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Prisma ORM', 'Tailwind CSS', 'REST API']
  },
  {
    id: 'exp-cimart-mbkm',
    period: 'Jul 2026 - Sekarang',
    role: 'Full-Stack Developer',
    organization: 'Inisiatif MBKM / KKN Tematik & Capstone Kampus Desa Cibenda',
    badge: 'MBKM / Capstone Kampus',
    category: 'project',
    description:
      'Inisiatif MBKM / KKN Tematik resmi dari kampus yang menjadi Capstone Project untuk digitalisasi komoditas ekonomi warga Desa Cibenda, Pangandaran. Dikerjakan secara mandiri dari perancangan arsitektur sistem, integrasi payment gateway Midtrans, notifikasi FCM, hingga deployment produksi.',
    highlights: [
      'Mandat Resmi Pimpinan Kampus & Perangkat Desa',
      'Development Arsitektur End-to-End',
      'Integrasi Payment Gateway Midtrans & WebSockets'
    ],
    tech: ['Laravel', 'Inertia.js', 'React', 'MySQL', 'Docker', 'WebSockets', 'Midtrans', 'Leaflet']
  },
  {
    id: 'exp-rework-cybersecurity',
    period: 'Agu 2026 - Des 2026',
    role: 'Cyber Security Trainee (Red Team Focus)',
    organization: 'Cyber Security Bootcamp by Rework Academy',
    badge: 'Cyber Security Bootcamp',
    category: 'security',
    description:
      'Pelatihan intensif keamanan siber komprehensif mulai dari fundamental cybersecurity, vulnerability assessment, web application penetration testing (OWASP Top 10), network penetration testing, bug bounty hunting, hingga penyusunan security reporting profesional. Fokus mendalam pada Red Team (Offensive Security) dengan pemahaman komplementer Blue Team (Defensive) dan Purple Team.',
    highlights: [
      'Web Application & Network Penetration Testing',
      'Metodologi Bug Bounty & Eksploitasi OWASP Top 10',
      'Vulnerability Assessment & Security Reporting',
      'Fokus Offensive Red Team dengan Pemahaman Blue/Purple Team'
    ],
    tech: ['Web App Pentesting', 'Network Security', 'OWASP Top 10', 'Bug Bounty', 'Red Teaming', 'Linux Security', 'Security Reporting']
  }
];
