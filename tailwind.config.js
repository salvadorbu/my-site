/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        periwinkle: "#DAFFFF",
      },
    },
    fontFamily: {
      bungee: ["bungee"],
    },
  },
  plugins: [],
};
