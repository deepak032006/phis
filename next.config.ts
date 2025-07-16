const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['phishdefense.com', 'themepanthers.com'],
  },

  // ✅ This disables type checking *only during build*, not in dev
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
