/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ygoprodeck.com"],
  },
  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
  experimental: {
    serverActions: true,
    appDir: true,
  },
};

module.exports = nextConfig;
