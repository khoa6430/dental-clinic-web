import type { NextConfig } from "next";

const isCloudflareBuild =
  process.env.CF_EXPORT === "true" ||
  process.env.WORKERS_CI === "1" ||
  process.env.CF_PAGES === "1";

const nextConfig: NextConfig = {
  ...(isCloudflareBuild && {
    output: "export",
    images: {
      unoptimized: true,
    },
  }),
};

export default nextConfig;
