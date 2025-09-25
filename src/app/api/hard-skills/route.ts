import { NextResponse } from 'next/server';

const hardSkills = [
  {
    id: 1,
    title: 'Frontend',
    abbr: 'FE',
    description: 'TypeScript, JavaScript (ES6+), Vue.js (Options & Composition API), React, Next.js, Vuetify, Quasar, Tailwind, Bootstrap, Material UI, HTML5, SCSS',
    color: '#ECC053',
  },
  {
    id: 2,
    title: 'Testing',
    abbr: 'TS',
    description: 'Jest, Cypress, TDD, BDD, Integration Testing, E2E',
    color: '#9C27B0',
  },
  {
    id: 3,
    title: 'Architecture & Tools',
    abbr: 'AT',
    description: 'Microservices, Serverless (Cloud Functions), REST APIs, GraphQL, OAuth, Payment APIs (Cardknox), Communication APIs (Plivo, SendGrid), Google Maps API',
    color: '#FF8C42',
  },
  {
    id: 4,
    title: 'State Management',
    abbr: 'SM',
    description: 'Redux, Vuex, Pinia',
    color: '#FFD819',
  },
  {
    id: 5,
    title: 'Performance',
    abbr: 'PF',
    description: 'Code Splitting, Lazy Loading, Asset Management',
    color: '#2196F3',
  },
  {
    id: 6,
    title: 'Version Control & CI/CD',
    abbr: 'VC',
    description: 'Git (GitHub, GitLab), GitHub Actions, GitLab CI/CD',
    color: '#FFB74D',
  },
  {
    id: 7,
    title: 'Build Tools',
    abbr: 'BT',
    description: 'Webpack, Vite',
    color: '#D283FF',
  },
  {
    id: 8,
    title: 'Backend Basics',
    abbr: 'BE',
    description: 'Python, Django, DRF',
    color: '#FFA726',
  },
  {
    id: 9,
    title: 'DevOps',
    abbr: 'DO',
    description: 'Docker (development), AWS S3, CloudFront, Route 53, IAM, EC2',
    color: '#4CAF50',
  },
  {
    id: 10,
    title: 'Design & UX',
    abbr: 'DX',
    description: 'Figma, Adobe Photoshop, Adobe Premiere Pro',
    color: '#E91E63',
  },
];

export async function GET() {
  return NextResponse.json(hardSkills);
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ received: data });
}