/** @type {import('next').NextConfig} */
const path = require("node:path");
const withReactSvg = require("next-react-svg");
module.exports = withReactSvg({
  include: path.resolve(__dirname, "src/svgs"),
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
});
