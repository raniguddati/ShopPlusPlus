/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'shop-blue': '#005C78',
        'shop-black': '#FFFFFF',
        'card-font': '#000000',
        'header-font': '#005C78',
        'bg-card': '#F3F7EC',
        'button-color': '#E88D67'
      },
      fontFamily: {
        'header-font': ['GaMaamli-Regular', 'sans-serif'],
        'card-font': ['RobotoSlab-VariableFont_wght', 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('flowbite/plugin')
  ],
}

