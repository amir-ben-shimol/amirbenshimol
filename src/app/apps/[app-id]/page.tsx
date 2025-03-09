import React from 'react';
import PageWrapper from '@/wrappers/PageWrapper';
import { appsList } from '@/data/apps';
import App from './components/App';

export function generateStaticParams() {
	return appsList.map((app) => ({
		'app-id': app.id,
	}));
}

const AppPage = () => {
	return (
		<PageWrapper className="relative flex justify-center">
			<App />
		</PageWrapper>
	);
};

export default React.memo(AppPage);
