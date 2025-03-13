import React from 'react';
import dynamic from 'next/dynamic';

import PageTransitionWrapper from '@/wrappers/PageTransitionWrapper';
import { cn } from '@/utils/class-name';
import { Footer } from './Footer';

const Header = dynamic(() => import('./Header'), {
	ssr: false,
});

type PageProps = {
	readonly children: React.ReactNode;
	readonly className?: string;
	readonly floatingFooter?: boolean;
};

const BaseLayout = (props: PageProps) => {
	return (
		<>
			<Header />
			<section className={cn('flex w-full flex-col', props.className)}>
				<PageTransitionWrapper>{props.children}</PageTransitionWrapper>
			</section>
			<Footer floating={props.floatingFooter} />
		</>
	);
};

export default BaseLayout;
