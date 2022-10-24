/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#faf4ee",
        purple: "#281952",
        "dark-purple": "#221545",
        yellow: "#FFD54F",
      },
      fontFamily: {
        averta: ["Averta", "sans-serif"],
        recoleta: ["Recoleta", "serif"],
      },
    },
  },
  plugins: [],
};
