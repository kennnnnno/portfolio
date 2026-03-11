import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/k-portfolio/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
