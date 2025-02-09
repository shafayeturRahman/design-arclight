/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        theme: 'Bricolage Grotesque',
        primary: 'Manrope',
        ephesis: 'Ephesis',
      },
      colors: {
        primary: '#fcf8f4',
        secondary: '#2F4156',
        theme: '#2F4156',
        themeMedium: '#567c8d',
        themeDark: '#181F39',
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
