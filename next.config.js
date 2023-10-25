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
      {
        protocol: 'https',
        hostname: 'sophy-bucket.s3.ap-northeast-2.amazonaws.com',
        // port: '',
        // pathname: '',
      },
    ],
  },
};

module.exports = nextConfig;
