/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          light: "#0B979E",
          dark: "#38B2AC",
        },
      },
    },
  },
  plugins: [],
};
