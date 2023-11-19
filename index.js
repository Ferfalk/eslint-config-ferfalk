// Migrate `@eslint` rules to @stylistic namespace
/* eslint @stylistic/migrate/migrate: "error" */

// eslint-disable-next-line n/no-unpublished-require
const stylistic = require('@stylistic/eslint-plugin');
// https://eslint.style/packages/default

const customized = stylistic.configs.customize({
  indent: 2,
  quotes: 'single',
  semi: true,
  jsx: false,
});

/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    '@stylistic',
    '@stylistic/migrate',
  ],
  extends: [
    'eslint:recommended',
    'plugin:n/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
  ],
  rules: {
    ...customized.rules,
    '@stylistic/max-len': [
      'error',
      {
        code: 80,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: false,
        ignoreRegExpLiterals: true,
      },
    ],
    '@stylistic/array-bracket-newline': ['error', 'consistent'],
    '@stylistic/array-element-newline': ['error', 'consistent'],
    '@stylistic/object-curly-newline': ['error', { consistent: true, multiline: true }],
    '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'eqeqeq': 'warn',
    'array-callback-return': 'warn',
    'sonarjs/cognitive-complexity': 'warn',
    'sonarjs/prefer-immediate-return': 'warn',
    'sonarjs/no-redundant-jump': 'warn',
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
};
