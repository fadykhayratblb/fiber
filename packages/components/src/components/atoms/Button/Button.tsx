import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef, Ref } from 'react';
import { buttonVariants } from './buttonVariants';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	};

const Button = /*#__PURE__*/ forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	props: ButtonProps,
	ref,
) {
	const { className, variant, size, icon, asChild, type = 'button', ...rest } = props;
	const computedClassName = clsx(buttonVariants({ variant, size, className, icon }));

	const Comp = asChild ? Slot : 'button';

	return (
		<Comp className={computedClassName} {...rest} ref={ref as Ref<HTMLButtonElement>} type={type} />
	);
});

Button.displayName = 'Button';

export default Button;
export { buttonVariants };
