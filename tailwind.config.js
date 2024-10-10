/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'kanit': ['Kanit', 'sans-serif'],
        'noto-sans-jp': ['"Noto Sans JP"', 'sans-serif'],
      }
    },
  },
  plugins: [require('daisyui')],
}