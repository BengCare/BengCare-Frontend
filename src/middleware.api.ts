import type { NextMiddleware, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware: NextMiddleware = (request: NextRequest) => {
  if (request.nextUrl.pathname.startsWith('/url'))
    return NextResponse.redirect(
      new URL(
        request.nextUrl.pathname.split('/').slice(2).join('/'),
        'https://url.bengcare.com',
      ),
    );
  return NextResponse.next();
};
