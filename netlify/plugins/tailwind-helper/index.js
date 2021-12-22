// index.js

module.exports = {
  onPreBuild: async ({ utils: { run } }) => {
    await run.command('npm run build:tailwind');
    console.log('%c tailwind build complete', 'color: cyan');
  }
};
