/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: [
    "dark",
    "light",
    "autumn",
    "bumblebee",
    "cmyk",
    "cupcake",
    "emerald",
    "fantasy",
    "halloween",
    "lemonade",
    "retro",
    "valentine",
    "winter",
  ],
  plugins: [require("daisyui")],
};
