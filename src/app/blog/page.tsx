import React from 'react';

import PageWrapper from '@/wrappers/PageWrapper';
import Blogs from './components/Blogs';

const Blog = () => {
	return (
		<PageWrapper>
			<Blogs />
		</PageWrapper>
	);
};

export default React.memo(Blog);
