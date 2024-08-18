import React from 'react';
import dynamic from 'next/dynamic';

import PageWrapper from '@/wrappers/PageWrapper';
import Intro from './components/Intro';

const ExternalLinks = dynamic(() => import('./components/ExternalLinks'), {
	ssr: false,
});

const About = () => {
	return (
		<PageWrapper className="max-w-[700px]">
			<Intro />
			<ExternalLinks />
		</PageWrapper>
	);
};

export default React.memo(About);
