// app/apps/[app-id]/page.tsx

import React from 'react';
import PageWrapper from '@/wrappers/PageWrapper';
import { appsList } from '@/data/apps';
import App from './components/App';

export function generateStaticParams() {
	return appsList.map((app) => ({
		'app-id': app.id,
	}));
}

type AppPageProps = {
	params: {
		'app-id': string;
	};
};

const AppPage = ({ params }: AppPageProps) => {
	return (
		<PageWrapper className="relative flex justify-center">
			<App appId={params['app-id']} />
		</PageWrapper>
	);
};

export default React.memo(AppPage);
