const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "hero-pattern": "url('/Vector.svg')",
      },
      colors: {
        primary: "#E8FF00",
        dark: "#1F1D2B",
        secondary: "#888888",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: "#tailwind-selector",
};
