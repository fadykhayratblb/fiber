import React from 'react';
import { JSX } from 'react/jsx-runtime';
import { Checkbox, CheckboxProps } from '.';

export default {
	title: 'Components/Checkbox',
	component: Checkbox,
	args: {
		indeterminate: true,
		checked: true,
	},
};

export const Default = (args: JSX.IntrinsicAttributes & CheckboxProps) => {
	return <Checkbox {...args} />;
};
