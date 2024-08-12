import React from 'react';

import PageWrapper from '@/wrappers/PageWrapper';
import { UIBackgroundBoxes } from '../../components/ui/UIBackgroundBoxes';
import Intro from './components/Intro';

const Root = () => {
	return (
		<PageWrapper className="relative h-[calc(100%-90px)] max-w-none items-center justify-center self-end overflow-hidden" wrapperClassName="p-0">
			<div className="c pointer-events-none absolute inset-0 z-20 h-full w-full bg-slate-100 [mask-image:radial-gradient(transparent,white)] dark:bg-slate-950 sm:flex" />
			<UIBackgroundBoxes />
			<Intro />
		</PageWrapper>
	);
};

export default React.memo(Root);
