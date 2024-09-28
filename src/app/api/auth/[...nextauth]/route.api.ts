import type { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { authenticate } from '@/lib/services';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, _req) {
        if (credentials) {
          const user = await authenticate(
            credentials.email,
            credentials.password,
          );
          if (user) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 2 * 60 * 60,
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  theme: {
    colorScheme: 'light',
    brandColor: '#415D9E',
    logo: 'https://github.com/user-attachments/assets/3b36741d-4a0a-4326-910b-2c13a97f02ab',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
