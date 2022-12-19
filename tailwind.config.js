/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-first': "url('../public/assets/images/hero-image-first.jpg')",
        'hero-second': "url('../public/assets/images/hero-image-second.jpg')",
      },
      colors: {
        'light-green': '#00B495',
        'deep-purple': '#16193A',
      },
      fontFamily: {
        sans: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: false,
  },
};
