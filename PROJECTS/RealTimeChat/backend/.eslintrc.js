module.exports = {
	env: { 'jest/globals': true, node: true },
	extends: [
		'airbnb-base',
		'plugin:prettier/recommended',
		'plugin:security/recommended',
		'plugin:json/recommended',
		'plugin:jest/recommended',
	],
	plugins: ['prettier', 'jest'],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'prettier/prettier': [
			'warn',
			{
				endOfLine: 'lf',
			},
		],
		'import/prefer-default-export': 'off',
		'no-underscore-dangle': [
			'error',
			{
				allow: ['_id'],
			},
		],
		'no-console': 'warn',
		'consistent-return': 'off',
		'no-unused-vars': 'warn',
		'import/extensions': ['warn', { js: 'never', json: 'never' }],
		'prefer-promise-reject-errors': 'off',
	},
}
