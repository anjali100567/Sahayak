import { NextResponse } from 'next/server';
import { WORKERS } from '../../../lib/mockData';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const minRating = searchParams.get('minRating');
  const maxPrice = searchParams.get('maxPrice');
  const search = searchParams.get('search');

  let filtered = [...WORKERS];

  if (category) {
    filtered = filtered.filter(w => w.category.toLowerCase() === category.toLowerCase());
  }
  if (minRating) {
    filtered = filtered.filter(w => w.rating >= parseFloat(minRating));
  }
  if (maxPrice) {
    filtered = filtered.filter(w => w.hourlyRate <= parseFloat(maxPrice));
  }
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(w =>
      w.name.toLowerCase().includes(q) ||
      w.categoryLabel.toLowerCase().includes(q) ||
      w.skills.some(s => s.toLowerCase().includes(q))
    );
  }

  return NextResponse.json({ workers: filtered, total: filtered.length });
}
