const source1 = 'src/tokens/light.json';
const source2 = 'src/tokens/dark.json';

const destination = 'dist/tokens/';

const commonConfig = {
	prefix: 'fiber',
	buildPath: destination,
};

export const config = {
	source: [source1, source2],
	platforms: {
		scss: {
			...commonConfig,
			transformGroup: 'scss',
			files: [
				{
					destination: 'variables.scss',
					format: 'scss/variables',
				},
			],
		},
		css: {
			...commonConfig,
			transformGroup: 'scss',
			files: [
				{
					destination: 'variables.css',
					format: 'css/variables',
					options: {
						selector: ':root, ::before, ::after',
					},
				},
			],
		},
		js: {
			...commonConfig,
			transformGroup: 'js',
			files: [
				{
					destination: 'variables-detailed.js',
					format: 'javascript/custom-key-value',
				},
			],
		},
		consumerJs: {
			...commonConfig,
			transformGroup: 'js',
			files: [
				{
					destination: 'variables.js',
					format: 'javascript/es6',
				},
			],
		},
	},
};
