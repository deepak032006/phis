/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['phishdefense.com', 'themepanthers.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
