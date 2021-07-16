module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      maxHeight: {
        content: 'max-content'
      },
      colors: {}
    }
  },
  variants: {},
  plugins: []
};
