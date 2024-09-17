/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cus-blue" : "#113243",
        "cus-purp" : "#6f3394",
        "cus-white" : "#f4faff",
        "cus-gold" : "#fdd441",
        "cus-vio" : "#b7adcf"
      }
    },
  },
  plugins: [],
}