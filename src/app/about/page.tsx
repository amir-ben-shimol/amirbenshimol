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
		<PageWrapper className="max-w-[830px]">
			<Intro />
			<GeneralLinks />
			<SocialMedia />
		</PageWrapper>
	);
};

export default React.memo(About);
