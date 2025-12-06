import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/**`),
    ],
    unoptimized: process.env.NODE_ENV === 'development'
  }
};

export default nextConfig;
