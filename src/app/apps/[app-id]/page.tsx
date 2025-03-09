import React from 'react';
import PageWrapper from '@/wrappers/PageWrapper';
import { appsList } from '@/data/apps';
import App from './components/App';

type AppPageProps = {
	readonly params: {
		'app-id': string;
	};
};

export function generateStaticParams() {
	return appsList.map((app) => ({
		'app-id': app.id,
	}));
}

const AppPage = ({ params }: AppPageProps) => {
	return (
		<PageWrapper className="relative flex justify-center">
			<App appId={params['app-id']} />
		</PageWrapper>
	);
};

export default React.memo(AppPage);
