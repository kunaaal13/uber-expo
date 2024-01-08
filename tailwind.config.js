/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        uber: {
          light: '#ffffff',
          dark: '#121212',
          blue: '#2171ec',
          darkGray: '#adadad',
          lightGray: '#e7e8ec',
        },
      },
    },
  },
  plugins: [],
};
