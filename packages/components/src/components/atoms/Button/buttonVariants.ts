import { cva } from 'class-variance-authority';
import classes from './Button.module.css';

export const buttonVariants = cva(classes.base, {
	variants: {
		variant: {
			default: classes.default,
			danger: classes.danger,
			outline: classes.outline,
			secondary: '',
			ghost: '',
			link: '',
		},
		size: {
			default: classes['size-default'],
			sm: classes['size-sm'],
			lg: classes['size-lg'],
		},
		icon: {
			true: classes.icon,
			false: '',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
		icon: false,
	},
});
