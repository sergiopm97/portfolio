/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "std-green": "#64ffda",
        "std-navy": "#0a192f",
        "light-navy": "#233554",
        "std-slate": "#8892b0",
        "light-slate": "#ccd6f6",
        "std-white": "#e6f1ff",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        spaceMono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
