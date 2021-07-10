module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2018
  }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: [
    'next',
    'next/core-web-vitals',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'react/button-has-type': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      },
      {
        usePrettierrc: true
      }
    ],
    // had to disable it, as i dont want to include server side deps in client
    'import/no-extraneous-dependencies': 'off',

    // Why would you ever need such a thing, lint is supposed to help not rule!
    'import/prefer-default-export': 'off',

    // When a is put under `next/link` href is provided... so no need
    'jsx-a11y/anchor-is-valid': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.jsx', '.css', '.mdx', '.js'],
        paths: ['.']
      }
    }
  }
};
