/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        grvb: ["Great Vibes", "cursive"],
        bodoni: ["Bodoni Moda", "serif"],
        libre: ["Libre Baskerville", "serif"]
      },
      colors: {
        customBrown: "#a2724e"
      }
    },
  },
  plugins: [],
}

