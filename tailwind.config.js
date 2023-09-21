/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      flexBasis: {
        "1/3-gap-4": "calc(33.3% - (2/3 * 1rem))"
      }
    },
  },
  plugins: [],
}

