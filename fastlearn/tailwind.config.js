/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      width: {
        '1/2-screen': '60vw',
        'more-than-half': '75vw', 
      },
      height: {
        'more-than-half': 'calc(50% + 10%)',
        '3/4-screen': '80vh', 
        '1/4-screen': '40vh', 
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #3730a3, #9d4edd, #3730a3)',
      },
    },
  },
  plugins: [],
});

