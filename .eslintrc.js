module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false
  },
  // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  ignorePatterns: ['node_modules/*', '.out/*'],
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
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

    // really?
    'react/function-component-definition': 'off',

    'comma-dangle': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.jsx', '.css', '.mdx', '.js', '.ts', '.tsx', '.svg'],
        paths: ['.']
      }
    }
  },
  overrides: [
    {
      env: { browser: true, es6: true, node: true },
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: 'tsconfig.json'
      }, // to enable features such as async/await,
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
      ],
      plugins: ['@typescript-eslint', 'prettier'],
      rules: {
        'react/jsx-filename-extension': [
          2,
          {
            extensions: ['.tsx']
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

        'react/function-component-definition': 'off',
        'import/no-unresolved': 'off',

        // I cant figure this out
        'import/extensions': 'off'
      },
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.jsx', '.css', '.mdx', '.js', '.ts', '.tsx', '.svg'],
            paths: ['.']
          }
        }
      }
    }
  ]
};
