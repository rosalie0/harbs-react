/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "harbs-yellow-lightest": "#fff7ce",
        "harbs-yellow": "#ffeb81",
        "harbs-brown": "#743e28",
        "harbs-brown-darkest": "#3b2014",
      },
    },
  },
  plugins: [],
};
