import React from 'react';
import dynamic from 'next/dynamic';

import PageWrapper from '@/wrappers/PageWrapper';
import Intro from './components/Intro';
import GeneralLinks from './components/GeneralLinks';

const SocialMedia = dynamic(() => import('./components/SocialMedia'), {
	ssr: false,
});

const About = () => {
	return (
		<PageWrapper className="max-w-[700px]">
			<Intro />
			<GeneralLinks />
			<SocialMedia />
		</PageWrapper>
	);
};

export default React.memo(About);
