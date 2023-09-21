/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'md': '768px',
      // => @media (min-width: 768px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

