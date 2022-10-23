/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.{html, js}", "./src/index.{js, html}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
