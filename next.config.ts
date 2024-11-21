import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api',
        destination: 'http://ec2-13-201-74-99.ap-south-1.compute.amazonaws.com/',
      },
    ]
  },
};

export default nextConfig;
