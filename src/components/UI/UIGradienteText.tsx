import { cn } from '@/utils/class-name';

type AsProp = 'h1' | 'h2' | 'h3' | 'p' | 'div' | 'span' | 'svg' | 'symbol' | 'link';

type Props<T extends AsProp = 'h1'> = {
	readonly children?: React.ReactNode;
	readonly className?: string;
	readonly as?: T;
} & (T extends 'svg' | 'symbol' ? React.SVGProps<SVGElement> : React.HTMLAttributes<HTMLElement>);

export const UIGradienteText = <T extends AsProp = 'h1'>({ as = 'h1' as T, children, className, ...rest }: Props<T>) => {
	const Component = as as React.ElementType;

	return (
		<Component
			className={cn(
				'bg-300% font-heading z-20 mt-10 h-20 animate-gradient bg-gradient-to-r from-orange-700 via-blue-500 to-green-500 bg-clip-text text-center text-3xl font-bold text-transparent sm:h-24 sm:text-7xl',
				className,
			)}
			{...rest}
		>
			{children}
		</Component>
	);
};
