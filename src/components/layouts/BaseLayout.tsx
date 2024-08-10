import React from 'react';
import dynamic from 'next/dynamic';

import PageTransitionWrapper from '@/wrappers/PageTransitionWrapper';

const Header = dynamic(() => import('./Header'), {
	ssr: false,
});

type PageProps = {
	readonly children: React.ReactNode;
};

const BaseLayout = (props: PageProps) => {
	return (
		<>
			<Header />
			<section className="flex h-full w-full flex-col overflow-hidden">
				<PageTransitionWrapper>{props.children}</PageTransitionWrapper>
			</section>
		</>
	);
};

export default BaseLayout;
