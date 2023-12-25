import React from 'react';
import { JSX } from 'react/jsx-runtime';
import { Blank, BlankProps } from '.';

export default {
	title: 'Components/Blank',
	component: Blank,
};

export const Default = (args: JSX.IntrinsicAttributes & BlankProps) => {
	return <Blank {...args}>Blank</Blank>;
};
