/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "rh-white": "#FFF",
        "rh-black": "#000",
        "rh-deep-purple": "#2D112B",
        "rh-sunset": "#FF583D",
        "rh-forrest": "#047857",
        "rh-ocean-blue": "#0066CC",
        "rh-space-blue": "rgb(15, 23, 42)",
      },
    },
  },
  plugins: [],
};