const defaultTheme = require('tailwindcss/defaultTheme');

const getColor =
  (colorCode) =>
  ({ opacityVariable, opacityValue }) =>
    opacityVariable
      ? `rgba(var(--${colorCode}) / var(${opacityVariable}))`
      : opacityValue
      ? `rgba(var(--${colorCode}) / ${opacityValue})`
      : `rgba(var(--${colorCode}) / 1)`;

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.tsx'],
  theme: {
    colors: {
      primary: getColor('primary'),
      'primary-accent': getColor('primary-accent'),
      'secondary-accent': getColor('secondary-accent')
    },
    screens: {
      md: '640px',
      lg: '1024px',
      xl: '1500px'
    },
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
