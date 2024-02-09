/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customRed: {
          500: '#f6f6d3', 
          700: '#cacaab',
        },
      },
    },
  },
  plugins: [   
    require('@tailwindcss/aspect-ratio'),
  ],
}

