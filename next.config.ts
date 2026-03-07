import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For GitHub Pages static export (production only)
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,

  // Subdirectory deployment: https://sameemqureshi.github.io/Portfolio/ (production only)
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : undefined,

  images: {
    unoptimized: process.env.NODE_ENV === 'production', // Required for static export in production
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;
