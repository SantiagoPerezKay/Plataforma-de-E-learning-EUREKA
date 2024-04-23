/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "swamp" : "#000D13",
        "internationalKleinBlue" : "#0834C4",
        "pictonBlue" : "#4DA0EC"
      }
    },
  },
  plugins: [],
}

