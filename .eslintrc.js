module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 8
  }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: [
    'next',
    'next/core-web-vitals',
    'airbnb',
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
    ]
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
