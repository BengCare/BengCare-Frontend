import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '540px',
      md: '768px',
      lg: '1024px',
      xl: '1240px',
    },
    extend: {
      colors: {
        white: {
          DEFAULT: '#FDFDFD',
        },
        black: {
          DEFAULT: '#111111',
        },
        primary: {
          100: "#E8F3FD",
          500: '#81A4DC',
          700: '#415D9E',
          800: "#29407F"
        },
        gray: {
          200: '#C8C8C8',
          300: '#AEAEAE',
          400: "#949494"
        },
      },
    },
    plugins: [require('@tailwindcss/forms')],
  },
};
export default config;
