/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        'dark-blue' : '#0B2434',
        'dark-purple': '#5035FF',
        'lime-green': '#59E391',
        'white-50': '#F5F5F5'
      }
    },
  },
  plugins: [],
}
