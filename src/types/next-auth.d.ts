import { DefaultJWT, DefaultSession, DefaultUser } from 'next-auth';

import { UserStore } from '@/lib/user';

declare module 'next-auth' {
  interface Session {
    user: UserStore & DefaultSession['user'];
  }

  interface User extends DefaultUser, UserStore {}
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT, UserStore {}
}
