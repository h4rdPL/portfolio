import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  webpack(config) {
    // Alias @/assets → ./src/assets
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@assets": require("path").resolve(__dirname, "src/assets"),
    };

    // Obsługa SVG jako komponentów React
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  // ❗ Wyłącz Turbopack, używaj Webpacka
  experimental: {
    turbo: false,
  },
};

export default nextConfig;
