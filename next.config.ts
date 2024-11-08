import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias["node:crypto"] = "crypto";
    return config;
  },
};

export default nextConfig;
