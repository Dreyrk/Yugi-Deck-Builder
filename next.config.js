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
};

module.exports = nextConfig;
