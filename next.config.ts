import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For GitHub Pages static export
  output: 'export',

  // Subdirectory deployment: https://sameemqureshi.github.io/Portfolio/
  basePath: '/Portfolio',

  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;
