import type { Metadata } from 'next';
import BaseLayout from '@/layouts/BaseLayout';

type Props = {
	readonly children: React.ReactNode;
};

export const metadata: Metadata = {
	title: 'Contact',
	description: 'Contact Amir Ben Shimol',
};

const ContactLayout = (props: Props) => {
	return <BaseLayout className="h-full">{props.children}</BaseLayout>;
};

export default ContactLayout;
