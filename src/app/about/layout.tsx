import type { Metadata } from 'next';
import BaseLayout from '@/layouts/BaseLayout';

type Props = {
	readonly children: React.ReactNode;
};

export const metadata: Metadata = {
	title: 'About',
	description: 'About Amir Ben Shimol',
};

const AboutLayout = (props: Props) => {
	return <BaseLayout floatingFooter>{props.children}</BaseLayout>;
};

export default AboutLayout;
