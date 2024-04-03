/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      primary: '#00dc82',
      secondary: '#020420',
    },
    fontFamily: {
      primary: 'Inter, sans-serif',
    },
    extend: {
    },
  },
  darkMode: 'selector',
  plugins: [require('@tailwindcss/typography')],
}
