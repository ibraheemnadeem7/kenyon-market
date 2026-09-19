import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // /purple was the first address of the purple design.
    return [{ source: "/purple", destination: "/sellers", permanent: false }];
  },
};

export default nextConfig;
