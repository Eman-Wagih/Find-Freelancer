import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('http://localhost:4000/freelancers');
    const freelancers = await res.json();

    return NextResponse.json(freelancers);
  } catch (error) {
    console.error(error)
  }
}
