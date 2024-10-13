import { cookies } from 'next/headers';
import type { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { authenticate } from '@/lib/services';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter your password',
        },
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
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  theme: {
    colorScheme: 'light',
    brandColor: '#415D9E',
    logo: 'https://github.com/user-attachments/assets/3b36741d-4a0a-4326-910b-2c13a97f02ab',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token = { ...user };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = { ...token };
      return session;
    },
  },
  events: {
    signOut: () => {
      cookies().delete('@bengcare/token');
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
