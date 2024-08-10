import BaseLayout from '@/layouts/BaseLayout';
import { Metadata } from 'next';

type Props = {
	readonly children: React.ReactNode;
};

export const metadata: Metadata = {
	title: '🧀 Blog - Amir Ben Shimol',
	description: 'Blog Amir Ben Shimol',
};

const BlogLayout = (props: Props) => {
	return <BaseLayout>{props.children}</BaseLayout>;
};

export default BlogLayout;
