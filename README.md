# @plato/eslint-config-ts

An [ESLint](https://eslint.org) configuration for [TypeScript](https://www.typescriptlang.org) projects.

## Setup

First, install this package as a development dependency:

### Configuration

```sh
yarn add @plato/eslint-config-ts --dev
```

Next, add the ESLint configuration (which simply extends `@plato/eslint-config-ts`) to your project's `package.json` file:

```json
{
  "eslintConfig": {
    "extends": "@plato/eslint-config-ts"
  }
}
```

> NOTE: You may also specify the [ESLint configuration](https://eslint.org/docs/user-guide/configuring) in a separate .eslintrc.json file.

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
  "script": {
    "build": "tsc",
    "lint": "eslint path/to/lint --ext .ts"
  },
  "devDependencies": {
    "@plato/eslint-config-ts": "^0.1.0",
    "typescript": "^4.0.3"
  },
  "eslintConfig": {
    "extends": "@plato/eslint-config-ts"
  }
}
```
