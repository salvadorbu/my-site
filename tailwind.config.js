/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        periwinkle: "#DAFFFF",
        backblue: "#0973A3"
      },
    },
    fontFamily: {
      bungee: ["bungee"],
    },
  },
  plugins: [],
};
