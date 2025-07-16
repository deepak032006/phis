const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['phishdefense.com', 'themepanthers.com'],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
