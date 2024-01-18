/** @type {{}} */
const colors = require('./src/assets/config/variables')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Your Font Name', 'sans-serif'],
      },
      colors: {
        ...colors
      }
    },
  },
  plugins: [],
}
