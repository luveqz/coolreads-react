/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    colors: {
      gray: {
        100: '#B9B6BD',
        200: '#908A8F',
        300: '#817E8C',
        400: '#38363E',
        500: '#24222C',
        600: '#1B1923',
      },
      white: '#FFFFFF',
      yellow: '#F8BA1A',
    },

    boxShadow: {
      card: '-2px 2px 0px rgba(0, 0, 0, 0.1)',
    },

    extend: {
      maxWidth: {
        'content-container': '820px',
      },
    },
  },
}
