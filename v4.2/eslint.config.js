import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	},
	{
		rules: {
			"max-len": ["warn", 120],
			"indent": ["warn", 2],
			"semi": ["warn", "never"],
			"quotes": ["warn", "single"],
			"comma-dangle": ["warn", "always-multiline"],
			"arrow-parens": ["warn", "as-needed"],
			"brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
			"curly": ["warn", "multi-or-nest"],
			"multiline-ternary": ["off"],
			"no-multiple-empty-lines": ["off"],
			"space-before-function-paren": ["warn", "never"],
			"object-curly-spacing": "off",
			"eol-last": ["warn", "always"],
			"object-shorthand": ["warn", "always"],
			"eqeqeq": ["warn", "always"],
			"space-infix-ops": ["warn"],
			"space-before-blocks": ["warn", "always"],
			"keyword-spacing": ["warn"],
			"arrow-spacing": ["warn"],
			"key-spacing": ["warn", { "mode": "minimum" }],
			"comma-spacing": ["warn"],
			"no-trailing-spaces": ["warn"],
			// "@typescript-eslint/type-annotation-spacing": ["warn"],
			// "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
			// "@typescript-eslint/member-delimiter-style": ["warn", {
			// 	"multiline": {
			// 		"delimiter": "none"
			// 	},
			// 	"singleline": {
			// 		"delimiter": "comma",
			// 		"requireLast": false
			// 	}
			// }],
			// "@typescript-eslint/object-curly-spacing": ["warn", "always"]
		},
	}
]