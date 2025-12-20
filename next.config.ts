import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  reactCompiler: true,
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/cv",
        destination: "/cv/Bakir-Gracic-CV.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
