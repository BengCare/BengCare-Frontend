import type { NextMiddleware, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

import { baseURL } from '@/lib/api';
import { UserProps } from '@/lib/user';
import { ApiReturn } from '@/types/api';

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
    async authorized({ req }) {
      if (req.nextUrl.pathname.startsWith('/admin')) {
        const authToken = req.cookies.get('@bengcare/token')?.value;

        if (!authToken) return false;

        try {
          const res = await fetch(baseURL + '/user/me', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authToken}`,
            },
          });

          if (!res.ok) return false;

          const user: ApiReturn<UserProps> = await res.json();

          if (!user || (user && user.data.role != 'admin')) return false;
        } catch (error) {
          return false;
        }
      }

      return true;
    },
  },
});
