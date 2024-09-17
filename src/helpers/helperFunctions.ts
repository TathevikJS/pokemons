import { NextRequest } from 'next/server';

export function isAuthenticated(request: NextRequest): boolean {
  const authCookie = request.cookies.get('isAuthenticated')?.value;
  return Boolean(authCookie);
}
