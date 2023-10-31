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
				hostname: 'ax0mjhjyzasf.compat.objectstorage.me-jeddah-1.oraclecloud.com',
				// port: '',
				// pathname: '/account123/**',
			},
		],
		domains: ['193.122.88.9', 'localhost','api-dev.hectare.app', 'marketplace.goatar.com','ax0mjhjyzasf.compat.objectstorage.me-jeddah-1.oraclecloud.com'],
	},
};

module.exports = nextConfig;
