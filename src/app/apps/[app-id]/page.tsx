import React from 'react';

import PageWrapper from '@/wrappers/PageWrapper';
import App from './components/App';

const AppPage = () => {
	return (
		<PageWrapper className="relative flex justify-center">
			<App />
		</PageWrapper>
	);
};

export default React.memo(AppPage);
