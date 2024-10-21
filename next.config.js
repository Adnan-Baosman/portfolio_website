/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
      hostname: 'instagram.fblr1-7.fna.fbcdn.net', // Add the domain here
      }
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
