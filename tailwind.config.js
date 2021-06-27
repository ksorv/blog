module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.jsx', './components/**/*.jsx', './layouts/**/*.jsx'],
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
