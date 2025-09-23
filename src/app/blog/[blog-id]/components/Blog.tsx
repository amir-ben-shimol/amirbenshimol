'use client';

import React, { useMemo } from 'react';
import { useParams } from 'next/navigation';

import { blogs } from '@/data/blogs';
import { formatDate } from '@/utils/date';

const Blog = () => {
	const params = useParams();

	const blogId = Array.isArray(params?.['blog-id']) ? params['blog-id'][0] : params?.['blog-id'];

	const blog = useMemo(() => {
		return blogs.find((blog) => blog.id === blogId);
	}, [blogId, params]);

	if (!blog) {
		return <div>Blog not found</div>;
	}

	return (
		<div className="flex w-full flex-col items-center">
			<div className="mb-3 flex items-center gap-3">
				<span className="text-sm text-gray-400 sm:text-base">{formatDate(blog.date)}</span>
				<span className="text-sm text-gray-400 sm:text-base">&minus;</span>
				<span className="text-sm text-gray-400 sm:text-base">{blog.readingTime}</span>
			</div>
			<h2 className="mb-1 text-2xl font-bold sm:mb-3 sm:text-5xl">{blog.title}</h2>
			<div className="mb-10 w-full max-w-4xl">
				<p className="border-l-4 border-blue-500 bg-blue-50 py-3 pl-4 text-lg font-medium italic text-gray-700 dark:bg-blue-900/20 dark:text-gray-300 sm:text-xl">
					{blog.description}
				</p>
			</div>
			<div className="w-[100%]">{blog.contentElement}</div>
		</div>
	);
};

export default React.memo(Blog);
