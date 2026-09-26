import type { ProfileData, Project, TechItem, ExperienceItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Soleh Wahyu Pratama',
  tagline: 'Quality Assurance Engineer',
  education: 'Informatics and Business University of Indonesia',
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
  // test automation layer
  {
    name: 'Playwright',
    category: 'automation',
    layer: 'client',
    iconKey: 'playwright',
    color: '#2EAD33',
    roleTag: 'E2E Automation',
    usageContext: 'End-to-end test suites with the Page Object Model, covering UI flows across browsers',
    projectLinks: ['reusely', 'e2e-sauce-demo']
  },
  {
    name: 'JavaScript',
    category: 'automation',
    layer: 'client',
    iconKey: 'javascript',
    color: '#eab308',
    roleTag: 'Test Scripting',
    usageContext: 'Writing Playwright specs, locators, and reusable page service classes',
    projectLinks: ['e2e-sauce-demo']
  },

  // API and performance testing layer
  {
    name: 'Postman',
    category: 'api',
    layer: 'backend',
    iconKey: 'postman',
    color: '#FF6C37',
    roleTag: 'API Validation',
    usageContext: 'API request collections, environment variables, and endpoint contract validation',
    projectLinks: ['reusely-api-testing']
  },
  {
    name: 'k6',
    category: 'api',
    layer: 'backend',
    iconKey: 'k6',
    color: '#7D64FF',
    roleTag: 'Load Testing',
    usageContext: 'Load and performance testing of API endpoints to check behavior under traffic',
    projectLinks: ['reusely', 'reusely-api-testing']
  },

  // workflow and tooling layer
  {
    name: 'Git',
    category: 'tools',
    layer: 'devops',
    iconKey: 'git',
    color: '#f97316',
    roleTag: 'Version Control',
    usageContext: 'Version control for test suites, branching, and collaboration with engineering teams',
    projectLinks: ['reusely', 'reusely-api-testing', 'e2e-sauce-demo']
  },
  {
    name: 'ClickUp',
    category: 'tools',
    layer: 'devops',
    iconKey: 'clickup',
    color: '#7B68EE',
    roleTag: 'Sprint Tracking',
    usageContext: 'Bug reporting, sprint planning, and tracking QA tasks alongside the engineering team',
    projectLinks: ['reusely', 'reusely-api-testing']
  }
];

export const projectsData: Project[] = [
  {
    id: 'reusely',
    title: 'Reusely',
    subtitle: 'QA Automation for the Reusely.com Recommerce Platform',
    category: 'reusely-e2e',
    summary: 'Safeguarding quality across every Reusely app, a recommerce platform for buying, selling, and trading in used devices, with 100+ automated test cases.',
    description: 'Working as a QA Engineer at Reusely since June 2025, responsible for testing the entire application suite. From end-to-end automation, API testing, and load testing to bug reporting, all of it runs inside the sprint cycle alongside the engineering team.',
    architecture: [
      'Playwright end-to-end suite covering every app with 100+ test cases',
      'API testing and validation with Postman collections',
      'Load testing with k6 to measure endpoint performance',
      'Test suite versioned in Git alongside the application repositories',
      'Bug reporting and sprint tracking in ClickUp'
    ],
    stack: ['Playwright', 'Postman', 'k6', 'Git', 'ClickUp'],
    highlights: [
      'Automated testing across all apps with 100+ test cases',
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
      { label: 'Test Cases', value: '100+ Automated' },
      { label: 'E2E Framework', value: 'Playwright' },
      { label: 'Workflow', value: 'Sprint' }
    ]
  },
  {
    id: 'reusely-api-testing',
    title: 'Reusely API Testing',
    subtitle: 'Postman Test Suite for the Reusely Partner API V2',
    category: 'reusely-api',
    summary: 'API testing for the Reusely Partner API, the integration layer that lets business partners run device buyback and trade-in flows end to end.',
    description: 'A Postman collection covering 25+ endpoints of the Reusely API V2, from partner accounts and store locations to catalog data, offer checkout, and lead management. Every request runs against Dev, Staging, and Live environments to validate buyback workflows before and after each release.',
    architecture: [
      'Postman collection organized by endpoint group: account & locations, catalog, offers, and leads',
      'Environment variables for Dev US, Staging US, Live US, and Live EU with a shared {{base-url}}',
      'Header-based authentication using x-api-key and x-secret-key stored as environment secrets',
      'Coverage of GET, POST, and PUT flows including mail-in and in-store offer checkout',
      'Load testing of key endpoints with k6 to check performance under traffic'
    ],
    stack: ['Postman', 'REST API', 'k6', 'Git', 'ClickUp'],
    highlights: [
      'Validated 25+ partner API endpoints across four environments',
      'Tested the full buyback flow: catalog lookup, pricing offer, checkout, and leads',
      'Reported API defects with reproducible requests for the engineering team'
    ],
    challenges: 'Keeping one collection consistent across multiple regions and environments, where data and credentials differ but the expected behavior must match.',
    role: 'QA Engineer (June 2025 - Present)',
    isPrivateRepo: true,
    privateRepoReason: 'Private company API collection',
    imageUrl: '/projects/APITesting.png',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Endpoints', value: '25+ Tested' },
      { label: 'Tooling', value: 'Postman + k6' }
    ]
  },
  {
    id: 'e2e-sauce-demo',
    title: 'E2E - SauceDemo',
    subtitle: 'Playwright End-to-End Automation with the Page Object Model',
    category: 'e2e-sauce-demo',
    summary: 'A public Playwright E2E suite built with the Page Object Model, covering login, dashboard, and payout flows on the SauceDemo test site.',
    description: 'A personal automation project built to demonstrate a clean, maintainable E2E testing structure: locators, page services, and specs kept in separate layers so the suite stays easy to extend. Covers positive and negative scenarios across the login, dashboard, and payout journeys.',
    architecture: [
      'Page Object Model with locators, page services, and specs in separate folders',
      'Reusable page service classes (LoginService, DashboardService) wrapping Playwright actions',
      'Positive and negative test specs per flow: login, dashboard, and payout',
      'Assertions on page title, product listings, and item descriptions',
      'Test suite run locally with the Playwright CLI'
    ],
    stack: ['Playwright', 'JavaScript', 'Page Object Model', 'Git'],
    highlights: [
      '7 end-to-end test cases across login, dashboard, and payout flows, all passing',
      'Page Object Model structure with locators and services kept separate from specs',
      'Public repository anyone can clone and run to verify the results'
    ],
    challenges: 'Structuring locators, page services, and specs into clear layers so new flows can be added without duplicating selectors or logic.',
    role: 'QA Engineer (Personal Project)',
    githubUrl: 'https://github.com/kingsbell/e2e-test-sauce-demo',
    imageUrl: '/projects/Public.png',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Test Cases', value: '7 Passed' },
      { label: 'Pattern', value: 'Page Object Model' },
      { label: 'Runner', value: 'Playwright CLI' }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'edu-unibi',
    period: '2020 - 2026',
    role: 'Bachelor of Informatics Engineering',
    organization: 'Information Technology and Business University of Indonesia',
    badge: 'Formal Education',
    category: 'education',
    description:
      'Undergraduate study in Informatics Engineering, covering core computer science fundamentals, data structures, algorithms, and software engineering, with a specialization track in Data Science.',
    highlights: [
      'Data Science specialization',
      'Automated testing fundamentals with Python & Selenium'
    ],
    tech: ['Selenium', 'Python', 'Data Analyst', 'Algorithms', 'Software Engineering']
  },
  {
    id: 'exp-digital-skola',
    period: 'Jul 2026',
    role: 'QA Engineer: Basic Automation & Testing',
    organization: 'Digital Skola',
    badge: 'Bootcamp',
    category: 'bootcamp',
    description:
      'Intensive QA Engineer bootcamp covering the fundamentals of manual and automated testing, API testing, performance testing, and mobile testing through hands-on projects.',
    highlights: [
      'Graduate of the QA Engineer track',
      'Hands-on training across manual, automation, API, and performance testing'
    ],
    tech: ['Postman', 'Selenium', 'JavaScript', 'Git', 'JMeter', 'k6', 'REST API', 'Mobile Testing']
  },
  {
    id: 'exp-reusely',
    period: 'Jun 2025 - Nov 2026',
    role: 'QA Engineer',
    organization: 'Reusely',
    badge: 'Full-time',
    category: 'project',
    description:
      'Working as a QA Engineer at Reusely, a recommerce platform for device buyback and trade-in. Responsible for testing the entire application suite: end-to-end automation, API testing, and load testing, with bug reporting and tracking inside the sprint cycle.',
    highlights: [
      'End-to-end & API test automation',
      'Bug reporting and sprint tracking with the engineering team'
    ],
    tech: ['Playwright', 'API Testing', 'Postman', 'Git', 'k6', 'REST API']
  }
];
