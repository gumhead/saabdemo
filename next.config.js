/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true
  // reactStrictMode: true,
};

module.exports = nextConfig;

const withImages = require('next-images');
module.exports = withImages();
