/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#0ea5e9",
        tertiary: "#ec4899",
        grad1: '#00FFF0',
        grad2: "#ff5ce5",
        primary2: "#0b1120",
      },
    },
  },
  plugins: [],
};