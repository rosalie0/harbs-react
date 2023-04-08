/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "harbs-yellow-lightest": "#fff7ce",
        "harbs-yellow": "#ffeb81",
        "harbs-brown": "#743e28",
        "harbs-brown-darkest": "#3b2014",
      },
      fontFamily: {
        "cormorant-garamond": ["Cormorant Garamond", "serif"],
        "crimson-pro": ["Crimson Pro", "serif"],
        taviraj: ["Taviraj", "serif"],
      },
    },
  },
  plugins: [],
};
