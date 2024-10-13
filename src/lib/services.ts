import { cookies } from 'next/headers';

import { baseURL } from '@/lib/api';
import { LoginResponse, UserProps } from '@/lib/user';
import { ApiReturn } from '@/types/api';

export const authenticate = async (username: string, password: string) => {
  try {
    const res = await fetch(baseURL + '/user/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) return null;

    const user: ApiReturn<LoginResponse> = await res.json();

    if (user) {
      cookies().set({
        name: '@bengcare/token',
        value: user.data.token,
        secure: true,
        path: '/',
      });

      try {
        const res = await fetch(baseURL + '/user/me', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.data.token}`,
          },
        });

        const me: ApiReturn<UserProps> = await res.json();

        return {
          ...me.data,
          email: username,
          role: user.data.role[0],
          authToken: user.data.token,
        };
      } catch (error) {
        return null;
      }
    }

    return null;
  } catch (error) {
    return null;
  }
};
