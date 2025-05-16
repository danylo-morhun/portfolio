import { NextResponse } from 'next/server';

const experience = [
  {
    id: 1,
    title: 'Frontend Developer at EZCLOUD LLC',
    logo: '/ezcloud.png',
    location: 'USA (Remote)',
    duration: 'Dec 2021 - Mar 2025 (3 years 4 months)',
    projects: [
      {
        id: 1,
        title: 'Amazon P&L Tracker',
        description:
          'Developed an interactive dashboard, allowing users to track seller profits, enhancing performance and user experience.',
        stack: ['Vue.js', 'TypeScript', 'Vuetify', 'Pinia'],
      },
      {
        id: 2,
        title: 'Scanly',
        description:
          'Developed a web application for Amazon product research and analysis, providing users with detailed insights and recommendations.',
        stack: ['React', 'TypeScript', 'Tailwind', 'Redux'],
      },
      {
        id: 3,
        title: 'IVR Replenishment System',
        description:
          'Developed an admin panel for managing phone replenishment via IVR systems, automating workflows and reducing manual input.',
        stack: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      },
      {
        id: 4,
        title: 'Advertisement Creation System',
        description:
          'Developed an advertisement creation scheduling platform, streamlining campaign setup and management.',
        stack: ['Vue.js', 'Quasar', 'Vuetify', 'Pinia'],
      },
    ],
  },
];

export async function GET() {
  return NextResponse.json(experience);
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ received: data });
}