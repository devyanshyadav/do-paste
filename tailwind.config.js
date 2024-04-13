/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EFFDDD', //(60%) => In background and others empty part
        'secondary': '#475551', //(30%) => In focus buttons,  border also for text and more
        'accent':"#BDE968" //(10%) => In buttons icons and more
      }

    },
  },
  plugins: [],
}