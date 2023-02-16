/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'jaune': '#D9A408',
      'bleu-vert': '#264653',
      'bleu-clair': '#84DCCF',
      'gris': '#EBEBEB',
      'gris-clair': '#F5F5F5',
      'white': '#FFFFFF',
    },
    fontFamily: {
      headerTitle: ['Oswald', 'sans-serif'],
      bodyFont: ['Anybody', 'sans-serif'],
      bodyFont2: ['Raleway', 'sans-serif'],
    },
    extend: {
      keyframes: {
        appear: {
          '0%': {opacity: '0'},
          '100%': {opacity: '100'},
        }
      },
      animation: {
        appear: 'appear 1s ease-in',
      }
    },
  },
  plugins: [],
}
