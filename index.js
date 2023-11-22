/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:n/recommended',
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
        FunctionDeclaration: {
          parameters: 'first',
        },
        FunctionExpression: {
          parameters: 'first',
        },
        ignoredNodes: ['TemplateLiteral > *'],
      },
    ], // https://stackoverflow.com/a/53094449 https://stackoverflow.com/a/54958527
    'prettier/prettier': ['error'],
    eqeqeq: 'warn',
    'array-callback-return': 'warn',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/require-description': [
      'warn',
      {
        ignore: ['eslint-enable'],
      },
    ],
    'sonarjs/cognitive-complexity': 'warn',
    'sonarjs/prefer-immediate-return': 'warn',
    'sonarjs/no-redundant-jump': 'warn',
    'no-unused-vars': 'warn',
    'import/no-named-as-default-member': 'off',
  },
};
