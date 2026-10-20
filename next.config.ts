import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  async headers() {
    return [
      {
        source: "/animation/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/section/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "imagedelivery.net" },
      { protocol: "https", hostname: "*.cloudflarestream.com" },
      { protocol: "https", hostname: "*.r2.dev" },
      { protocol: "https", hostname: "*.cloudflare.com" },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
