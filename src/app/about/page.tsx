import React from 'react';

import PageWrapper from '@/wrappers/PageWrapper';
import Intro from './components/Intro';
import GeneralLinks from './components/GeneralLinks';
import dynamic from 'next/dynamic';

const SocialMedia = dynamic(() => import('./components/SocialMedia'), {
	ssr: false,
});

const About = () => {
	return (
		<PageWrapper>
			<Intro />
			<GeneralLinks />
			<SocialMedia />
		</PageWrapper>
	);
};

export default React.memo(About);
