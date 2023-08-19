/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    appDir: true,
    serverActions: true,
  },
};

module.exports = nextConfig;
