/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ygoprodeck.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
