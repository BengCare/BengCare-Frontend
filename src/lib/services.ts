export const users = [
  { email: 'admin@bengcare.com', password: 'BengCare.1234#' },
];

export const authenticate = async (email: string, password: string) => {
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    return { id: user.email, email: user.email };
  } else {
    return null;
  }
};
