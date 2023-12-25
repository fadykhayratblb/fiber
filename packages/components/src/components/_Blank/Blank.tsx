import { HTMLAttributes, ReactElement, Ref, forwardRef } from 'react';

export interface BlankProps extends HTMLAttributes<HTMLDivElement> {}

export type BlankComponent = (props: BlankProps) => ReactElement<any, any> | null;

const Blank = forwardRef(function Blank(props: BlankProps, ref: Ref<HTMLDivElement>) {
	return <div {...props} ref={ref} />;
});

export default Blank as BlankComponent;
