const isGH = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isGH ? '/realEstateDemo' : '',
  assetPrefix: isGH ? '/realEstateDemo/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
