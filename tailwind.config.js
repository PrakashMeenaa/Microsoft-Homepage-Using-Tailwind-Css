/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'lg': '860px',
        'xl': '886px',
        '2xl': '1084px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}

