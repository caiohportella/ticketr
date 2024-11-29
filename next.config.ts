import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "upbeat-stoat-959.convex.cloud", protocol: "https" },
      { hostname: "wary-anaconda-29.convex.cloud", protocol: "https" },
      { hostname: "utmost-grasshopper-208.convex.cloud", protocol: "https" },
      { hostname: "beaming-greyhound-937.convex.cloud", protocol: "https" },
    ],
  },
};

export default nextConfig;
