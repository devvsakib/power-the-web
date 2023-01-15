/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,js}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
      backdropBlur: {
        sm : "3px",
        md: "6px"
      },
      colors: {
        "gradLeft" : "#EFEFBB",
        "gradRight" : "#D4D3DD",
      },
      padding: {
        sm:"10px"
      },
      dropShadow: {
        '3xl': '0 15px 10px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.25)'
        ]
      }
    },
  },
  plugins: [],
};
