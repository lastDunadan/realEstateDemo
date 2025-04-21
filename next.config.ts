/** @type {import('next').NextConfig} */
const isGH = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isGH ? '/realEstateDemo' : '',
  assetPrefix: isGH ? '' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
