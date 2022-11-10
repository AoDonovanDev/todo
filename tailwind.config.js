/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.{html, js}", "./src/index.{js, html}", "./dist/splash.{html, js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
