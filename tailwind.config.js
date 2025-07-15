/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        frijole: ["Frijole", "sans-serif"],
        geologica: ["Geologica", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
        rubik_dirt: ["Rubik Dirt", "sans-serif"],
        work_sans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        potta_one: ["Potta One", "sans-serif"],
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
        regular: 400,
      },
    },
  },
  plugins: [],
};
