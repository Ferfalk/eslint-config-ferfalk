/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ['*.@(spec|test).@(ts|js)'],
      env: {
        jest: true,
      },
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      rules: {
        'jest/prefer-expect-assertions': 'warn',
      },
    },
  ],
};
