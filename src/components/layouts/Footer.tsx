import { cn } from '@/utils/class-name';

type Props = {
	readonly floating?: boolean;
};

export const Footer = (props: Props) => {
	return (
		<footer
			className={cn('p-4 text-center text-gray-600 dark:text-gray-400', {
				'fixed bottom-0 left-0 right-0 z-30 hidden sm:block': props.floating,
			})}
		>
			<p>© 2025 Amir Ben Shimol. All rights reserved.</p>
		</footer>
	);
};
