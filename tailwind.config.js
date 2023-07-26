/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#cc3f65",
        secondColor: "#0044b4",
        yellowRegilet: "#ff960c",
        blueRegilet: "#77c8e5",
        greenRegilet: "#71b024",
        roseRegilet: "#eb008b",
      },
      fontFamily: {
        raleway: ['"Raleway"', '"sans-serif"'],
      },
      backgroundImage: {
        texture: "url('assets/images/texture.svg')",
        Slide1: "url('assets/images/slides/slide_1.png')",
        Slide2: "url('assets/images/slides/slide_2.png')",
        Slide3: "url('assets/images/slides/slide_3.png')",
      },
      keyframes: {
        change: {
          "0%": { marginLeft: "0" },
          "20%": { marginLeft: "0" },
          "25%": { marginLeft: "-100%" },
          "45%": { marginLeft: "-100%" },
          "50%": { marginLeft: "-200%" },
          "70%": { marginLeft: "-200%" },
          "75%": { marginLeft: "-300%" },
          "100%": { marginLeft: "-300%" },
        },
      },
      animation: {
        change: "change 20s infinite alternate linear",
      },
    },
  },
  plugins: [],
};
