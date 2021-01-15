"use strict";

module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: [
		"@typescript-eslint",
	],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
	],
	rules: {
		"func-call-spacing": ["error", "never"],
		"indent": ["error", "tab", {
			SwitchCase: 1,
		}],
		"no-multiple-empty-lines": ["error", {
			max: 1,
		}],
		"quotes": ["error", "double"],
		"space-before-function-paren": ["error", {
			anonymous: "never",
			named: "never",
			asyncArrow: "always",
		}],
	},
};
