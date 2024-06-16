import Cookies from 'universal-cookie';

const cookies = new Cookies({
  secure: true,
});

export const getToken = (): string => {
  return cookies.get('@ukmexpo/token');
};

export const setToken = (token: string) => {
  cookies.set('@ukmexpo/token', token, {
    path: '/',
    secure: true,
  });
};

export const removeToken = () => {
  cookies.remove('@ukmexpo/token', {
    path: '/',
    secure: true,
  });
};
