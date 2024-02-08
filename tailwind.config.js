/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
      'phone': '340px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
