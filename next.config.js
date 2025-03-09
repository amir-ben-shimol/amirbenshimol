import withMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	typescript: {
		tsconfigPath: './tsconfig.build.json',
	},
	compiler: {
		removeConsole: false,
		reactRemoveProperties: true,
	},
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api.microlink.io',
				pathname: '**',
			},
		],
	},
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	output: 'export',
};

/** @type {import('@next/mdx').NextMDXOptions} */
const mdxConfig = {
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypeRaw],
	},
};

const nextWithMdxConfigFn = withMDX(mdxConfig);

export default nextWithMdxConfigFn(nextConfig);
