import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

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
      fontFamily: {
        primary: ['var(--font-saoTorpes)', ...fontFamily.sans],
        secondary: ['var(--font-poppins)', ...fontFamily.sans],
      },
      colors: {
        white: {
          DEFAULT: '#FCFAFF',
        },
      },
    },
    plugins: [require('@tailwindcss/forms')],
  },
};
export default config;
