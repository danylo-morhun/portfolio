import { NextResponse } from "next/server";

const hardSkills = [
  {
    title: "Frontend Development",
    description: "JS, TS, Vue, React, Next.js, Vuetify, Tailwind",
    color: "#ECC053",
  },
  {
    title: "State Management",
    description: "Redux, Pinia, Vuex",
    color: "#FFD819",
  },
  {
    title: "APIs",
    description: "RESTful APIs, GraphQL APIs",
    color: "#FF8C42",
  },
  {
    title: "Backend Basics",
    description: "Python, Django, Django REST",
    color: "#1687FF",
  },
  {
    title: "Build Tools",
    description: "Webpack, Vite, Turbopack",
    color: "#D283FF",
  },
  {
    title: "Version Control",
    description: "Git (GitLab, GitHub), GitLab CI/CD, GitHub Actions, Docker",
    color: "#42C5FF",
  },
  {
    title: "UI/UX & Design Tools",
    description: "Figma (UI/UX Prototyping), Photoshop, Premiere Pro",
    color: "#E91E63",
  }
];

// get
export async function GET() {
  return NextResponse.json(hardSkills);
}

// post
export async function POST(request: Request) {
  const data = await request.json();
  // received
  return NextResponse.json({ received: data });
}
