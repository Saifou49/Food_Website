/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        saifou : '#fE1209'
      },
      screens:{
        'xs' : '350px'
      }
    },
  },
  plugins: [],
}

