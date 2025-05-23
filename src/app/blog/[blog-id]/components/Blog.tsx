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
			<span className="mb-10 max-w-[600px] text-center text-lg text-gray-400 sm:text-xl">{blog.description}</span>
			<div className="w-[100%]">{blog.contentElement}</div>
		</div>
	);
};

export default React.memo(Blog);
