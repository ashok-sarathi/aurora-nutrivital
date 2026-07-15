import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/aurora-nutrivital" : "",
  assetPrefix: isProd ? "/aurora-nutrivital/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/aurora-nutrivital" : "",
  },
};

export default nextConfig;
