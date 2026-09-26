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
  qa: {
    label: 'Quality Assurance',
    short: 'QA',
    tag: 'QUALITY ASSURANCE',
    caseStudy: 'QA AUTOMATION SUITE',
    system: 'QA Automation'
  }
};
