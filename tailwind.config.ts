import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F5F5F1',
        ink: '#15171C',
        inkmuted: '#4B4F58',
        line: '#DEDCD3',
        signal: '#4338CA',
        signaldark: '#332B96',
        amber: '#C9791C',
        surface: '#FFFFFF',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-worksans)', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
export default config;
