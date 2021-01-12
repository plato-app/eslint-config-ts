# @plato/eslint-config-ts

A shareable [ESLint](https://eslint.org) configuration for [TypeScript](https://www.typescriptlang.org) projects at [Plato](https://github.com/plato-app).

## Setup

### Configuration

First, install this package, along with ESLint, TypeScript, and associated plugins, as development dependencies:

```sh
yarn add @plato/eslint-config-ts eslint typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser --dev
```

> ℹ️ Since the command above can be difficult to visually parse, the required development dependencies are:
> * @plato/eslint-config-ts (this package)
> * [eslint](https://www.npmjs.com/package/eslint)
> * [typescript](https://www.npmjs.com/package/typescript)
> * [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
> * [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)

Next, add the ESLint configuration (which simply extends `@plato/eslint-config-ts`) to your project's `package.json` file:

```json
{
  "eslintConfig": {
    "extends": "@plato/eslint-config-ts"
  }
}
```

> ℹ️ You may also specify the [ESLint configuration](https://eslint.org/docs/user-guide/configuring) in a separate `.eslintrc.json` file.

### Run the Linter

To easily run the linter from a shell, add a `lint` command to the `scripts` property of your project's `package.json` file:

```json
{
  "scripts": {
    "lint": "eslint path/to/lint --ext .ts"
  }
}
```

Now you can run `yarn lint` to lint the project's code.

### Editor Integration

Many editors support ESLint. Here are some common editors and associated ESLint plugins.

* [Atom](https://atom.io) - [linter-eslint](https://atom.io/packages/linter-eslint)

### Example Configuration

A complete `package.json` might look similar to the following:

```json
{
  "name": "my-package",
  "version": "0.1.0",
  "scripts": {
    "build": "tsc",
    "lint": "eslint path/to/lint --ext .ts"
  },
  "devDependencies": {
    "@plato/eslint-config-ts": "^0.3.0",
    "@typescript-eslint/eslint-plugin": "^4.13.0",
    "@typescript-eslint/parser": "^4.13.0",
    "eslint": "^7.17.0",
    "typescript": "^4.1.3"
  },
  "eslintConfig": {
    "extends": "@plato/eslint-config-ts"
  }
}
```
