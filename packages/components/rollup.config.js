import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import pureanno from 'rollup-plugin-pure-annotation';

export default {
	input: './src/index.tsx',
	output: {
		dir: 'dist/esm',
		format: 'esm',
		exports: 'named',
		preserveModules: true,
	},
	plugins: [
		typescript({
			compilerOptions: {
				declaration: true,
				declarationDir: 'dist/esm/dts',
			},
			exclude: ['./src/components/_Blank/*', './src/**/__tests__/*', '*.stories.*'],
		}),
		pureanno({
			includes: ['**/*.js', '**/*.ts'],
		}),
		babel(),
	],
};
