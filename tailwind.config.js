const getColor =
  (colorCode) =>
  ({ opacityVariable }) =>
    opacityVariable
      ? `rgba(var(--${colorCode}) / var(${opacityVariable}))`
      : `rgba(var(--${colorCode}) / 1)`;

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.tsx'],
  theme: {
    colors: {
      primary: getColor('primary'),
      secondary: getColor('secondary'),
      tertiary: getColor('tertiary'),
      'primary-accent': getColor('primary-accent'),
      'secondary-accent': getColor('secondary-accent')
    },
    extend: {}
  },
  plugins: []
};
