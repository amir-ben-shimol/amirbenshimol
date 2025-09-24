import React from 'react';
import { blogs } from '@/data/blogs';
import Blog from './Blog';

const Blogs = () => {
	return (
		<div className="flex flex-col">
			{blogs.map((blog, index) => (
				<Blog key={index} blog={blog} />
			))}
		</div>
	);
};

export default React.memo(Blogs);
