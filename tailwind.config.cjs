/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "std-green": "#64ffda",
        "std-navy": "#0a192f",
        "light-navy": "#233554",
        "dark-navy": "#071526",
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
