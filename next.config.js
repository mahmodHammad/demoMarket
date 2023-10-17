/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	experimental: {
		appDir: true,
	},
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api-dev.hectare.app',
				// port: '',
				// pathname: '/account123/**',
			},
		],
		domains: ['193.122.88.9', 'localhost','api-dev.hectare.app'],
	},
};

module.exports = nextConfig;
