/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    fontFamily: {
      primary: "Montserrat",
      secondary: "Manrope",
      tertiary: "Poppins",
    },
    screens: {
      sm: "650px",
      md: "850px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#4193D4",
        secondary: "#323635",
        tertiary: "#FCF7F4",
      },
    },
  },
  plugins: [],
};
