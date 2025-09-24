import Link from 'next/link';
import React from 'react';
import { formatDate } from '@/utils/date';
import type { Blog as BlogType } from '@/types/ui/blog';
import { routes } from '@/routes/index';

type Props = {
	readonly blog: BlogType;
};

const Blog = (props: Props) => {
	const getBlogParams = (path: string) => {
		return `${routes.blog.path}/${path}`;
	};

	return (
		<div className="mb-14 flex flex-col items-start">
			<Link
				className="border-b-2 border-transparent pb-1 text-2xl font-bold text-foreground text-slate-700 hover:border-b-foreground dark:text-slate-300 sm:pb-2 sm:text-5xl"
				href={getBlogParams(props.blog.id)}
			>
				{props.blog.title}
			</Link>
			<span className="mb-4 mt-2 text-lg text-gray-400 sm:mb-6 sm:mt-4 sm:text-2xl">{props.blog.description}</span>
			<div className="flex items-center gap-2">
				<span className="text-base text-gray-400 sm:text-xl">{formatDate(props.blog.date)}</span>
				<span className="text-base text-gray-400 sm:text-xl">&minus;</span>
				<span className="text-base text-gray-400 sm:text-xl">{props.blog.readingTime}</span>
			</div>
		</div>
	);
};

export default React.memo(Blog);
