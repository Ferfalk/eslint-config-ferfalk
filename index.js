/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:n/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral > *'],
      },
    ], // https://stackoverflow.com/a/53094449 https://stackoverflow.com/a/54958527
    'prettier/prettier': ['error'],
    eqeqeq: 'warn',
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
