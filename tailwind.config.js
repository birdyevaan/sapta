/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Adding custom font
        serif: ['Merriweather', 'serif'], // You can add another font if you like
      },
    },
  },
  plugins: [],
}