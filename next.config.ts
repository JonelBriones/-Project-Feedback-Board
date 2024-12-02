import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
    ],
  },
  eslint: {
    // add this when creating next js project without eslint
    ignoreDuringBuilds: true,
  },

  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@/components/*": ["components/*"],
      "@/utils/*": ["utils/*"],
    },
  },
};

export default nextConfig;
