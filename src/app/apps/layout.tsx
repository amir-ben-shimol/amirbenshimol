import BaseLayout from '@/layouts/BaseLayout';
import { Metadata } from 'next';

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
