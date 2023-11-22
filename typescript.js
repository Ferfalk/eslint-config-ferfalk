/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig?(.test).json',
  },
  extends: [
    './index.js',
    'plugin:import/typescript',
    'plugin:rxjs/recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  rules: {
    'n/no-missing-import': 'off',
    'rxjs/no-sharereplay': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['private-constructors', 'protected-constructors', 'decoratedFunctions', 'overrideMethods'] },
    ],
    '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true, ignoreProperties: true }],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
};
