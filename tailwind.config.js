/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#AF0000',
        'normal-text-color': '#121212'
      }
    },
    screens: {
      'tablet': '640px',
      'tablet-768': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
      'desktop-1440': '1440px',
      'desktop-1536': '1536px'
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

