// Migrate `@typescript-eslint` rules to @stylistic namespace
/* eslint @stylistic/migrate/migrate: "error" */

/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  overrides: [
    {
      files: [
        '*.@(spec|test).@(ts|js)',
      ],
      env: {
        jest: true,
      },
      extends: [
        'plugin:jest/recommended', 'plugin:jest/style',
      ],
      rules: {
        'jest/prefer-expect-assertions': 'warn',
      },
    },
  ],
};
