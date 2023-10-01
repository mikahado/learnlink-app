/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        inactiveGray: '#E3E3E3',
        errorRed: '#F44D52',
        ctaGreen: '#8CFF80',
        buttonTextGreen: '#124A57',
        primaryPurple: '#699AF5',
        secondaryPurple: '#AFC7F5',
        textGround: '#FBFBEE',
        textBrown: '#362E2E'
      },
    },
  },
  plugins: [],
}

