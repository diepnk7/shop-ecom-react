/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'cats': 'url(https://placekitten.com/1400)'
      },
      fontFamily: {
        Satoshi: ["Satoshi"],
        integralcf: ["integralcf"],
      },
      boxShadow: {
        full: "0  0 15px rgba(0, 0, 0, 0.1) ",
      },
    },
    screens: {
      xsm: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1540px",
    },
  },
  plugins: [],
};
