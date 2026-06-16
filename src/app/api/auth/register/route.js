import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { USERS } from '@/lib/mockData';
import { signToken } from '@/lib/auth';

export async function POST(request) {
  try {
    const { name, identifier, password, role } = await request.json();

    if (!name || !identifier || !password || !role) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = USERS.find(u => u.email === identifier || u.phone === identifier);
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists with this email or phone' }, { status: 409 });
    }

    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create new user (Mock in-memory store)
    const newUser = {
      id: `u${Date.now()}`,
      name,
      email: identifier.includes('@') ? identifier : undefined,
      phone: !identifier.includes('@') ? identifier : undefined,
      password: hashedPassword,
      role,
      createdAt: new Date().toISOString()
    };

    if (role === 'worker') {
      newUser.workerId = `w${Date.now()}`;
    }

    USERS.push(newUser);

    // Create JWT payload
    const payload = {
      id: newUser.id,
      name: newUser.name,
      role: newUser.role,
      workerId: newUser.workerId
    };

    const token = await signToken(payload);

    // Set HTTP-only cookie
    const cookieStore = await cookies();
    cookieStore.set({
      name: 'auth_token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return NextResponse.json({ user: payload, message: 'Registration successful' }, { status: 201 });
  } catch (error) {
    console.error('Registration Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
