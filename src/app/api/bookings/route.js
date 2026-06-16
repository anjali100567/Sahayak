import { NextResponse } from 'next/server';
import { BOOKINGS } from '../../../lib/mockData';

let bookings = [...BOOKINGS];

export async function GET() {
  return NextResponse.json({ bookings });
}

export async function POST(request) {
  const body = await request.json();
  const newBooking = {
    id: `LH-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    ...body,
    status: 'pending',
    paymentStatus: 'pending',
    createdAt: new Date().toISOString()
  };
  bookings.push(newBooking);
  return NextResponse.json({ booking: newBooking }, { status: 201 });
}
