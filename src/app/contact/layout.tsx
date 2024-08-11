import { Metadata } from 'next';
import BaseLayout from '@/layouts/BaseLayout';

type Props = {
	readonly children: React.ReactNode;
};

export const metadata: Metadata = {
	title: '🧀 Contact - Amir Ben Shimol',
	description: 'Contact Amir Ben Shimol',
};

const ContactLayout = (props: Props) => {
	return <BaseLayout>{props.children}</BaseLayout>;
};

export default ContactLayout;
