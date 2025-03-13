import { cn } from '@/utils/class-name';

type Props = {
	readonly floating?: boolean;
};

export const Footer = (props: Props) => {
	return (
		<footer
			className={cn('p-4 text-center text-gray-600 dark:text-gray-400', {
				'fixed bottom-0 left-0 right-0 z-30': props.floating,
			})}
		>
			<p>© 2025 Developed & Designed by Amir Ben Shimol. All rights reserved.</p>
		</footer>
	);
};
