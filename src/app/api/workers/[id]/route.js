import { NextResponse } from 'next/server';
import { WORKERS, REVIEWS } from '../../../../lib/mockData';

export async function GET(request, { params }) {
  const { id } = await params;
  const worker = WORKERS.find(w => w.id === id);

  if (!worker) {
    return NextResponse.json({ error: 'Worker not found' }, { status: 404 });
  }

  const reviews = REVIEWS.filter(r => r.workerId === id);
  return NextResponse.json({ worker, reviews });
}
