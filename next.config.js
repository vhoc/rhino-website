/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  // typescript: {
  //   ignoreBuildErrors: true, // 💀 disables all TypeScript build errors
  // },
  // eslint: {
  //   ignoreDuringBuilds: true, // 💀 disables ESLint errors during build
  // },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "us-west-2.graphassets.com"
      },
      {
        protocol: "https",
        hostname: "picsum.photos"
      },      
    ],
  },
};

export default config;
