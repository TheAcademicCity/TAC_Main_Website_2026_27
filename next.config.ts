import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "theacademiccity.com",
      },
      {
        protocol: "https",
        hostname: "the-academic-city-boarding-school.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
