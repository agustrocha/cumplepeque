/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#CFADA2",
          DEFAULT: "#bf8079",
          dark: "#582417"
        },
        secondary: {
          light: "#d9b595",
          DEFAULT: "#c09342",
        },
        rosa: {
          light: "#E2CAD0",
          DEFAULT: "#E8BBC2",
          dark: "#E7607C",
        },
        azul: {
          DEFAULT: "#96AED0",
          dark: "#83A1C9"
        },
        white: {
          DEFAULT: "#EFEFEE"
        },
        black: {
          DEFAULT: "#161616"
        }
      },
      height: {
        "30r": "30rem",
      }
    },
  },
  plugins: [],
}
