import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('isAuthenticated')?.value;

  const url = request.nextUrl.clone();
  

  if (!isAuthenticated && url.pathname.startsWith('/pokemons')) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  if (isAuthenticated && url.pathname === '/login') {
    url.pathname = '/pokemons';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/pokemons/:path*', '/login'],
};
