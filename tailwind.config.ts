/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
      roll: {
        '0%': { transform: 'rotateX(45deg) rotateY(-45deg)' },
        '25%': { transform: 'rotateX(-45deg) rotateY(-45deg)' },
        '50%': { transform: 'rotateX(45deg) rotateY(45deg)' },
        '75%': { transform: 'rotateX(-45deg) rotateY(45deg)' },
        '100%': { transform: 'rotateX(45deg) rotateY(-45deg)' },
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      animation: {
        roll: 'roll 5s infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
