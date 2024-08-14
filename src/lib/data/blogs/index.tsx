import type { Blog } from '@/types/ui/blog';

import CssScssVsTailwindWhenToUseWhat from './content/css-scss-vs-tailwind-when-to-use-what.mdx';

export const blogs: Blog[] = [
	{
		id: 'css-scss-vs-tailwind-when-to-use-what',
		title: 'CSS/SCSS vs. Tailwind: When to Use What',
		description:
			'Exploring the pros and cons of CSS/SCSS and Tailwind, this article provides insights into when to use each approach based on project size, team composition, and performance considerations',
		date: new Date('2024-08-12'),
		readingTime: '10 min read',
		contentElement: <CssScssVsTailwindWhenToUseWhat />,
	},
];
