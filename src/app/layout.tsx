import type { Metadata } from 'next';

import AppWrapper from '@/wrappers/AppWrapper';
import ThemeProvider from '@/providers/themeProvider';

import '../styles/globals.css';

type Props = {
	readonly children: React.ReactNode;
};

export const metadata: Metadata = {
	metadataBase: new URL('https://amirbenshimol.com'),
	title: {
		default: 'Amir Ben Shimol',
		template: '%s | Amir Ben Shimol',
	},
	description: 'Portfolio website of Amir Ben Shimol, a software developer specializing in modern web technologies.',
	applicationName: 'Amir Ben Shimol',
	authors: [{ name: 'Amir Ben Shimol', url: '/' }],
	generator: 'Next.js',
	keywords: [
		'Amir Ben Shimol',
		'software developer',
		'web development',
		'frontend developer',
		'backend developer',
		'full stack developer',
		'portfolio',
		'JavaScript',
		'React',
		'Next.js',
		'CSS',
		'HTML',
	],
	referrer: 'origin-when-cross-origin',
	creator: 'Amir Ben Shimol',
	publisher: 'Amir Ben Shimol',
	robots: {
		index: true,
		follow: true,
		noarchive: false,
		nosnippet: false,
		noimageindex: false,
		nocache: false,
		notranslate: false,
		googleBot: {
			index: true,
			follow: true,
			noarchive: false,
		},
	},
	alternates: {
		canonical: '/',
	},
	icons: {
		icon: '/favicon.ico',
		apple: '/apple-touch-icon.png',
		shortcut: '/favicon.ico',
		other: [
			{
				url: '/android-chrome-192x192.png',
				rel: 'icon',
				type: 'image/png',
				sizes: '192x192',
			},
			{
				url: '/android-chrome-512x512.png',
				rel: 'icon',
				type: 'image/png',
				sizes: '512x512',
			},
		],
	},
	manifest: '/manifest.webmanifest',
	openGraph: {
		type: 'website',
		url: '/',
		title: '🧀 Amir Ben Shimol',
		description: 'Portfolio website of Amir Ben Shimol, a software developer specializing in modern web technologies.',
		siteName: 'Amir Ben Shimol',
		locale: 'en_US',
		images: [
			{
				url: '/images/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Amir Ben Shimol',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@amirbenshimol',
		creator: '@amirbenshimol',
		title: 'Amir Ben Shimol',
		description: 'Explore the work and expertise of Amir Ben Shimol, a software developer focused on web development.',
		images: ['/images/og-image.png'],
	},
	verification: {
		google: 'your-google-site-verification-code', // Replace with your actual verification code
		yahoo: 'your-yahoo-verification-code', // Replace with your actual verification code
		yandex: 'your-yandex-verification-code', // Replace with your actual verification code
	},
	appleWebApp: {
		capable: true,
		title: 'Amir Ben Shimol',
		statusBarStyle: 'black-translucent',
	},
	formatDetection: {
		telephone: false,
		email: false,
		address: false,
	},
	abstract: 'Portfolio website of Amir Ben Shimol, a software developer specializing in modern web technologies.',
	category: 'Portfolio',
	classification: 'Software Development',
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
