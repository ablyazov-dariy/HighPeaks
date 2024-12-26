import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts}'],
  theme: {
    colors: {
      gray: 'rgba(0,0,0,0.62)',
      white: 'rgb(255,255,255)',
      black: 'rgb(0,0,0)',
      lightgray: 'rgba(255, 255, 255, 0.44)',
      raspberry: '#530030',
      apricot: '#FFD2BF',
      debug: 'red',
    },
    fontFamily: {
      roboto: ['Roboto', 'serif'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
