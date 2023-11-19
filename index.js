// Migrate `@eslint` rules to @stylistic namespace
/* eslint @stylistic/migrate/migrate: "error" */

// eslint-disable-next-line n/no-unpublished-require
const stylistic = require('@stylistic/eslint-plugin');
// https://eslint.style/packages/default#rules

const customized = stylistic.configs.customize({
  flat: false,
  indent: 2,
  quotes: 'single',
  semi: true,
  jsx: false,
});

// const { writeFileSync } = require('fs');
// writeFileSync('./customized.json', JSON.stringify(customized.rules, null, 2), 'utf8');

/** @type {import('eslint').Linter.RulesRecord} */
const stylisticRules = {
  ...customized.rules,
  '@stylistic/array-bracket-newline': ['error', 'consistent'],
  '@stylistic/array-element-newline': ['error', 'consistent'],
  '@stylistic/arrow-parens': ['error', 'always'],
  '@stylistic/brace-style': ['error', '1tbs'],
  '@stylistic/max-len': [
    'error',
    {
      code: 120,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: true,
    },
  ],

  '@stylistic/member-delimiter-style': [
    'error',
    {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
      multilineDetection: 'brackets',
    },
  ],
  '@stylistic/object-curly-newline': ['error', { consistent: true, multiline: true }],
  '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
};

/** @type {import('eslint').Linter.BaseConfig} */
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
    ...stylisticRules,
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
