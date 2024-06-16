import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xs': '320px',
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        white: {
          DEFAULT: '#FDFDFD',
        },
        black: {
          DEFAULT: '#111111',
        },
        primary:{
          500: '#81A4DC',
          700: "#415D9E",
        },
        gray: {
          200: "#C8C8C8",
          300: "#AEAEAE"
        }
      },
    },
    plugins: [require('@tailwindcss/forms')],
  },
};
export default config;
