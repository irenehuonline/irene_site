/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      blur: {
        xs: '3px', // custom extra small blur
      },
    },
  },
  plugins: [],
}

