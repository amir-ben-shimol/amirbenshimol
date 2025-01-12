import { UIBackButton } from '@/ui/UIBackButton';
import { cn } from '@/utils/class-name';

type Props = {
	readonly children: React.ReactNode;
	readonly className?: string;
	readonly wrapperClassName?: string;
	readonly navBack?: boolean;
};

const PageWrapper = (props: Props) => {
	return (
		<section className={cn('flex-cols flex h-full w-full justify-center overflow-auto px-8 pb-6 pt-36', props.wrapperClassName)}>
			<div className={cn('h-fit w-full max-w-[700px]', props.className)}>
				{props.navBack && <UIBackButton />}
				{props.children}
			</div>
		</section>
	);
};

export default PageWrapper;
