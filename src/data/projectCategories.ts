import type { Project } from '../types/portfolio';

export const PROJECT_CATEGORY_LABELS: Record<
  Project['category'],
  { label: string; short: string; tag: string; caseStudy: string; system: string }
> = {
  fullstack: {
    label: 'Full-Stack Web',
    short: 'Web',
    tag: 'FULL-STACK WEB',
    caseStudy: 'FULL-STACK WEB ARCHITECTURE',
    system: 'Web System'
  },
  mobile: {
    label: 'Mobile Flutter',
    short: 'Mobile',
    tag: 'MOBILE FLUTTER',
    caseStudy: 'MOBILE FLUTTER SYSTEM',
    system: 'Mobile App'
  },
  'reusely-e2e': {
    label: 'Reusely E2E Test',
    short: 'E2E',
    tag: 'REUSELY E2E TEST',
    caseStudy: 'E2E AUTOMATION SUITE',
    system: 'E2E Automation'
  },
  'reusely-api': {
    label: 'Reusely API Test',
    short: 'API',
    tag: 'REUSELY API TEST',
    caseStudy: 'API TEST SUITE',
    system: 'API Testing'
  },
  'e2e-sauce-demo': {
    label: 'E2E Sauce Demo',
    short: 'Sauce Demo',
    tag: 'E2E SAUCE DEMO',
    caseStudy: 'E2E AUTOMATION SUITE',
    system: 'E2E Automation'
  }
};
