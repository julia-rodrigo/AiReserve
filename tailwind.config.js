/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      containerxl: "2520px",
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        // xs: "320px",
        // sm: "375px",
        // sml: "500px",
        // md: "667px",
        // mdl: "768px",
        // lg: "960px",
        // lgl: "1024px",
        // xl: "1280px",
      },
      // fontFamily: {
      //   bodyFont: ["Poppins", "sans-serif"],
      //   titleFont: ["Poppins", "sans-serif"],
      // },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        bodyColor: "#0A192F",
      },
      animation: {
        "spin-slow": "spin 100s linear infinite",
        "reverse-spin": "reverse-spin 15s linear infinite",
        "spin-ease": "reverse-spin 5s ease-in-out",
        "border": "spin 4s linear infinite"
      },
      keyframes: {
        "reverse-spin": {
          from : {
            transform: "rotate(360deg)"
          }
        },

        "border": {
          from : {
            transform: "rotate(0deg)"
          },
          to : {
            transform: "rotate(360deg)"
          }
        }
      },
      boxShadow: {
        greenShadow: "0px 0px 188px -14px rgba(237, 255, 32, 1)",
        testShadow: "11px 0px 13px -15px rgba(0, 0, 0, 1)",
      }
    },
  },
  plugins: [
    // require('tailwind-scrollbar'),
  ],
  darkMode: 'class',
}
