import React from 'react';
import { JSX } from 'react/jsx-runtime';
import { Button, ButtonProps } from '.';

export default {
	title: 'Components/Button',
	component: Button,
	args: {
		disabled: false,
		title: 'Button title',
		children: 'Button',
	},
};

export const Default = (args: JSX.IntrinsicAttributes & ButtonProps) => {
	return <Button {...args} />;
};
