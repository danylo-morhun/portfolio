import { NextResponse } from 'next/server';

const hardSkills = [
  {
    id: 1,
    title: 'Frontend Development',
    abbr: 'FD',
    description: 'JS, TS, Vue, React, Next.js, Vuetify, Tailwind',
    color: '#ECC053',
  },
  {
    id: 2,
    title: 'State Management',
    abbr: 'SM',
    description: 'Redux, Pinia, Vuex',
    color: '#FFD819',
  },
  {
    id: 3,
    title: 'APIs',
    abbr: 'API',
    description: 'RESTful APIs, GraphQL APIs',
    color: '#FF8C42',
  },
  {
    id: 4,
    title: 'Backend Basics',
    abbr: 'BE',
    description: 'Python, Django, Django REST',
    color: '#1687FF',
  },
  {
    id: 5,
    title: 'Build Tools',
    abbr: 'BT',
    description: 'Webpack, Vite, Turbopack',
    color: '#D283FF',
  },
  {
    id: 6,
    title: 'Version Control',
    abbr: 'VC',
    description: 'Git (GitLab, GitHub), GitLab CI/CD, GitHub Actions, Docker',
    color: '#42C5FF',
  },
  {
    id: 7,
    title: 'UI/UX & Design Tools',
    abbr: 'UI',
    description: 'Figma (UI/UX Prototyping), Photoshop, Premiere Pro',
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