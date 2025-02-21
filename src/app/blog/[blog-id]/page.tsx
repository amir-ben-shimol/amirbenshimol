import React from 'react';

import { blogs } from '@/data/blogs';
import PageWrapper from '@/wrappers/PageWrapper';
import Blog from './components/Blog';

export function generateStaticParams() {
	return blogs.map((blog) => ({
		'blog-id': blog.id,
	}));
}

const BlogPage = () => {
	return (
		<PageWrapper className="flex justify-center">
			<Blog />
		</PageWrapper>
	);
};

export default React.memo(BlogPage);
