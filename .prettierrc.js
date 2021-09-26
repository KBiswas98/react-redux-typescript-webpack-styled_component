// .prettierrc.js
module.exports = {
	printWidth: 150,
	useTabs: true,
	semi: false,
	singleQuote: true,
	trailingComma: 'all',
	bracketSpacing: true,
	jsxBracketSameLine: false,
	arrowParens: 'avoid',
	parser: 'flow',
	overrides: [
		{
			files: '*.css',
			options: {
				parser: 'css',
			},
		},
	],
}
