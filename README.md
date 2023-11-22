# eslint-config-ferfalk

Shared [ESLint](https://eslint.org/docs/latest/) configurations.

## Installation

### JavaScript

Install dependencies:

```bash
npm install --save-dev eslint-config-ferfalk eslint eslint-plugin-n eslint-plugin-import eslint-plugin-prettier eslint-plugin-promise eslint-plugin-sonarjs prettier prettier-eslint eslint-config-prettier @ferfalk/prettier-config
```

### TypeScript

Install [JavaScript dependencies](#javascript) and additional TypeScript dependencies:

```bash
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript eslint-plugin-rxjs
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
