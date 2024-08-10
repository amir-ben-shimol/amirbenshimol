import React from 'react';

import PageWrapper from '@/wrappers/PageWrapper';
import Blog from './components/Blog';

const BlogPage = () => {
	return (
		<PageWrapper className="flex justify-center">
			<Blog />
		</PageWrapper>
	);
};

export default React.memo(BlogPage);
