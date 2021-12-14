module.exports = {
  presets: [''],
  plugins: [
    [
      'module-resolver',
      {
        root: './',
        alias: {
          'components/*': ['./components/*'],
          'data/*': ['./data/*'],
          'styles/*': ['./styles/*'],
          'scripts/*': ['./scripts/*'],
          'stores/*': ['./stores/*'],
          'types/*': ['./types/*'],
          'types/*': ['./types/*']
        }
      }
    ]
  ]
};
