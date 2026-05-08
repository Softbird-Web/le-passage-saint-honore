import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["lenis", "gsap"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
};

export default nextConfig;
