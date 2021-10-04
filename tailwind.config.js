const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgColor: {
          light: '#F4F4F4',
          dark: '#222'
        },
        brand: {
          primary: '#55266F',
          hover: '#6B4FC4',
          accent: '#c7c734',
          accentGreen: '#41B09C',
          accentOrange: '#E18888'
        },
        textColor: {
          light: '#fff',
          dark: '#222'
        }
      },
      text: {
        light: '#fff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
