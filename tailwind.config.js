/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'sidebar': '264px'
      },
      backgroundColor: {
        'tag': '#5FBF77'
      },
      colors: {
        'tag': '#39414B',
        'border-color': '#CFCFE4'
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"]
      },
      boxShadow: {
        'courseItem': '0px 10px 13px -4px #23235F30'
      }
    },
  },
  plugins: [],
}

