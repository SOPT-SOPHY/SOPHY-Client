/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spicy-gatsby-1c7.notion.site',
        // port: '',
        // pathname: '',
      },
    ],
  },
};

module.exports = nextConfig;
