import React from 'react';

import PageWrapper from '@/wrappers/PageWrapper';
import { appsList } from '@/data/apps';
import { UIGradienteText } from '@/ui/UIGradienteText';
import App from './components/app';

const Apps = () => {
	return (
		<PageWrapper className="max-w-[700px] lg:max-w-[930px] xl:max-w-[1200px] 2xl:max-w-[1400px]">
			<div className="mb-5 flex items-center justify-center gap-3 lg:mb-10">
				<h1 className="h-14 text-nowrap text-center text-3xl font-bold text-foreground text-slate-700 dark:text-slate-300 sm:text-5xl lg:h-24 lg:text-7xl">
					Quality crafted
				</h1>
				<UIGradienteText className="h-14 w-fit sm:h-14 sm:text-5xl lg:h-24 lg:text-7xl">Apps</UIGradienteText>
			</div>
			<div className="grid grid-cols-1 gap-0 sm:gap-6 lg:grid-cols-2 lg:gap-12">
				{appsList.map((app) => (
					<App key={app.title} {...app} />
				))}
			</div>
		</PageWrapper>
	);
};

export default React.memo(Apps);
