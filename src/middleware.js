import { NextResponse } from 'next/server';
import { verifyToken } from './lib/auth';

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Define protected routes
  const isDashboardRoute = pathname.startsWith('/dashboard');
  const isAdminRoute = pathname.startsWith('/dashboard/admin');
  const isWorkerRoute = pathname.startsWith('/dashboard/worker');
  const isAuthRoute = pathname.startsWith('/auth/');

  const token = request.cookies.get('auth_token')?.value;

  if (isDashboardRoute) {
    if (!token) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    const payload = await verifyToken(token);

    if (!payload) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    if (isAdminRoute && payload.role !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url));
    }

    if (isWorkerRoute && payload.role !== 'worker') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Redirect authenticated users away from login/register pages
  if (isAuthRoute && token) {
    const payload = await verifyToken(token);
    if (payload) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*'],
};
