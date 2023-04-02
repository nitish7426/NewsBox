/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
