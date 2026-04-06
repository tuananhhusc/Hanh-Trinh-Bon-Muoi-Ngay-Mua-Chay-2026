import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repositoryName = 'Hanh-Trinh-Bon-Muoi-Ngay-Mua-Chay-2026';

const nextConfig: NextConfig = {
  output: 'export',
  // On GitHub Pages, the base path is the repository name
  basePath: isProd ? `/${repositoryName}` : '',
  // Images must be unoptimized for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
