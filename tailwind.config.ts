import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.ts'],
  theme: {
    colors: {
      white: '#FFFFFFFF',
      black: '#000000',
      apricot: '#FFD2BF',
    },
    fontFamily: {
      roboto: ['Roboto', 'serif'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
