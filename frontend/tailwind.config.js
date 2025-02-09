/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        theme: 'Bricolage Grotesque',
        primary: 'Manrope',
      },
      colors: {
        primary: '#fcf8f4',
        secondary: '#2F4156',
        theme: '#2F4156',
        themeMedium: '#567c8d',
        themeLight: '#c7d9e5',
        themeGray: '#cccccc',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};
