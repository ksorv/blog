const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

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
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    colors: {
      ...colors,
      primary: getColor('primary'),
      secondary: getColor('secondary'),
      tertiary: getColor('tertiary'),
      paccent: getColor('paccent'),
      saccent: getColor('saccent')
    },
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography')]
};
