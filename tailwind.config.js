/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#abfcb7",

          "secondary": "#45bec6",

          "accent": "#555aba",

          "neutral": "#2A1F2D",

          "base-100": "#2E3A42",

          "info": "#8FD9EF",

          "success": "#28A969",

          "warning": "#F0C775",

          "error": "#F3163B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

