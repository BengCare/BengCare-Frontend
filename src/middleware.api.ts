import type { NextMiddleware, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

const middleware: NextMiddleware = (request: NextRequest) => {
  if (request.nextUrl.pathname.startsWith('/url'))
    return NextResponse.redirect(
      new URL(
        request.nextUrl.pathname.split('/').slice(2).join('/'),
        'https://url.bengcare.com',
      ),
    );
  return NextResponse.next();
};

export default withAuth(middleware, {
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  callbacks: {
    authorized({ req, token }) {
      if (req.nextUrl.pathname.startsWith('/admin') && token === null) {
        return false;
      }
      return true;
    },
  },
});
