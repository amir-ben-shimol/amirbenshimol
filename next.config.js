/** @type {import('next').NextConfig} */

const nextConfig = (phase) => {
	return {
		reactStrictMode: false,
		typescript: {
			tsconfigPath: './tsconfig.build.json',
		},
		eslint: {
			dirs: ['./src'],
			ignoreDuringBuilds: true,
		},

		images: {
			domains: ['api.microlink.io'],
		},
	};
};

module.exports = nextConfig;
