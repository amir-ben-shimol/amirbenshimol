import type { Metadata } from 'next';

import AppWrapper from '@/wrappers/AppWrapper';
import ThemeProvider from '@/providers/ThemeProvider';

import '../styles/globals.css';

type Props = {
	readonly children: React.ReactNode;
};

export const metadata: Metadata = {
	title: '🧀 Amir Ben Shimol',
	description: 'Amir Ben Shimol Website',
};

const RootLayout = (props: Props) => {
	return (
		<AppWrapper>
			<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
				{props.children}
			</ThemeProvider>
		</AppWrapper>
	);
};

export default RootLayout;
