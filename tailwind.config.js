/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      'inter': ['"Inter"', 'sans-serif'],
      'itim': ['"Itim"', 'cursive'],
    },colors: {
      'title-gray': '#3A3A3A',
      'text-gray': '#5A5A5A',
      'kc-blue': '#02C8FF',
    },},
  },
  plugins: [],
}

