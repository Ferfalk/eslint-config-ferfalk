# eslint-config-ferfalk

<!-- [![Publish](https://github.com/Ferfalk/eslint-config-ferfalk/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Ferfalk/eslint-config-ferfalk/actions/workflows/npm-publish.yml) -->

[![Publish](https://img.shields.io/github/actions/workflow/status/Ferfalk/eslint-config-ferfalk/npm-publish.yml?label=publish)](https://github.com/Ferfalk/eslint-config-ferfalk/actions/workflows/npm-publish.yml)
[![NPM Version](https://img.shields.io/npm/v/eslint-config-ferfalk.svg)](https://www.npmjs.com/package/eslint-config-ferfalk)
[![NPM Downloads](https://img.shields.io/npm/dt/eslint-config-ferfalk.svg)](https://www.npmjs.com/package/eslint-config-ferfalk)
[![Github Repo Size](https://img.shields.io/github/repo-size/Ferfalk/eslint-config-ferfalk.svg)](https://github.com/Ferfalk/eslint-config-ferfalk)
[![LICENSE](https://img.shields.io/npm/l/eslint-config-ferfalk.svg)](https://github.com/Ferfalk/eslint-config-ferfalk/blob/main/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/Ferfalk/eslint-config-ferfalk.svg)](https://github.com/Ferfalk/eslint-config-ferfalk/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/Ferfalk/eslint-config-ferfalk.svg)](https://github.com/Ferfalk/eslint-config-ferfalk/commits/main)

Shared [ESLint](https://eslint.org/docs/latest/) configurations.

## Installation

### JavaScript

Install dependencies:

```bash
npm install --save-dev eslint-config-ferfalk eslint eslint-plugin-n eslint-plugin-prettier eslint-plugin-promise eslint-plugin-sonarjs prettier prettier-eslint eslint-config-prettier @ferfalk/prettier-config
```

### TypeScript

Install [JavaScript dependencies](#javascript) and additional TypeScript dependencies:

```bash
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-rxjs
```

### Jest

Install additional Jest dependencies:

```bash
npm install --save-dev eslint-plugin-jest
```

## Usage

### ESLint

Create **.eslintrc.json** file:

#### JavaScript

```json
{
  "root": true,
  "extends": ["ferfalk"]
}
```

#### TypeScript

```json
{
  "root": true,
  "extends": ["ferfalk/typescript"]
}
```

The TypeScript configuration already extends the JavaScript configuration.

#### Jest

If Jest is configured, add **ferfalk/jest** rules:

```json
{
  "extends": ["ferfalk/typescript", "ferfalk/jest"]
}
```

Works with [JavaScript](#javascript-1) or [TypeScript](#typescript-1) rules.

### Prettier

Set your [Prettier](https://github.com/prettier/prettier) configuration, for [@ferfalk/prettier-config](https://github.com/Ferfalk/prettier-config) add the **prettier** property on **package.json**:

```json
{
  "prettier": "@ferfalk/prettier-config"
}
```

### lint-staged

This project also publishes [lint-staged](https://github.com/lint-staged/lint-staged) configurations for JavaScript and TypeScript.
Create a **lint-staged.config.js** file:

#### ESM:

```js
import jsConfig from 'eslint-config-ferfalk/lint-staged-javascript.js';
import tsConfig from 'eslint-config-ferfalk/lint-staged-typescript.js';

export default {
  ...jsConfig,
  ...tsConfig,
};
```

#### CommonJS:

```js
const jsConfig = require('eslint-config-ferfalk/lint-staged-javascript.js');
const tsConfig = require('eslint-config-ferfalk/lint-staged-typescript.js');

module.exports = { ...jsConfig, ...tsConfig };
```

## License

[MIT](https://github.com/Ferfalk/prettier-config/blob/main/LICENSE)
