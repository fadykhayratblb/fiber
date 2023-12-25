import type { StorybookConfig } from '@storybook/react-vite';
import globby from 'globby';
import { dirname, join } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')));
}

// ignore blank component stories
const stories = globby.sync(
	[
		'../src/**/*.@(stories.tsx)',
		'../src/**/*.mdx',
		'!../src/components/_Blank/*.@(js|jsx|ts|tsx|mdx)',
	],
	{
		cwd: './.storybook',
	},
);

// console.log(`🚀 ~ stories:`, stories);

const config: StorybookConfig = {
	stories,
	addons: [
		getAbsolutePath('@storybook/addon-links'),
		getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('@storybook/addon-onboarding'),
		getAbsolutePath('@storybook/addon-interactions'),
	],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
};
export default config;
