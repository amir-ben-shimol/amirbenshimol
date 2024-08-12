import type { Metadata } from 'next';
import BaseLayout from '@/layouts/BaseLayout';

type Props = {
	readonly children: React.ReactNode;
};

export const metadata: Metadata = {
	title: '🧀 About - Amir Ben Shimol',
	description: 'About Amir Ben Shimol',
};

const AboutLayout = (props: Props) => {
	return <BaseLayout>{props.children}</BaseLayout>;
};

export default AboutLayout;
