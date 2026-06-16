import { NextResponse } from 'next/server';
import { REVIEWS } from '../../../lib/mockData';

let reviews = [...REVIEWS];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const workerId = searchParams.get('workerId');

  let filtered = reviews;
  if (workerId) {
    filtered = reviews.filter(r => r.workerId === workerId);
  }

  return NextResponse.json({ reviews: filtered });
}

export async function POST(request) {
  const body = await request.json();
  const newReview = {
    id: `r${Date.now()}`,
    ...body,
    createdAt: new Date().toISOString().split('T')[0]
  };
  reviews.push(newReview);
  return NextResponse.json({ review: newReview }, { status: 201 });
}
