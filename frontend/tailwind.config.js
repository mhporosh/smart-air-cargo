/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
        display: ["Playfair Display", "serif"],
        mono: ["DM Mono", "monospace"],
      },
      colors: {
        crimson: "#7b1c2e",
        navy: "#0d1b3e",
        paper: "#f8f7f4",
      },
    },
  },
  plugins: [],
};
