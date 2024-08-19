import type { Blog } from '@/types/ui/blog';

import CssScssVsTailwindWhenToUseWhat from './content/css-scss-vs-tailwind-when-to-use-what.mdx';
import NextJsVsReactWhenToUseWhat from './content/nextjs-vs-react-when-to-use-what.mdx';

export const blogs: Blog[] = [
	{
		id: 'nextjs-vs-react-when-to-use-what',
		title: 'Next.js vs. React: When to Use What',
		description: 'Exploring when to use Next.js versus React, focusing on frontend development and project needs.',
		date: new Date('2024-02-19'),
		readingTime: '5 min read',
		contentElement: <NextJsVsReactWhenToUseWhat />,
	},
	{
		id: 'css-scss-vs-tailwind-when-to-use-what',
		title: 'CSS/SCSS vs. Tailwind: When to Use What',
		description:
			'Exploring the pros and cons of CSS/SCSS and Tailwind, this article provides insights into when to use each approach based on project size, team composition, and performance considerations',
		date: new Date('2023-12-20'),
		readingTime: '10 min read',
		contentElement: <CssScssVsTailwindWhenToUseWhat />,
	},
];
