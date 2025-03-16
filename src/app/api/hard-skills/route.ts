import { NextResponse } from "next/server";

// get
export async function GET() {
  return NextResponse.json([
    { title: "Frontend Development", description: "TS, JS" },
    { title: "Backend Basics", description: "Python" },
  ]);
}

// post
export async function POST(request: Request) {
  const data = await request.json();
  // received
  return NextResponse.json({ received: data });
}
