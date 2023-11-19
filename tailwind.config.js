/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-purple": "black",
        "secondar-white": "#c7c7c7",
      },
      borderWidth: {
        0.5: "0.1px",
      },
    },
  },
  plugins: [],
};
