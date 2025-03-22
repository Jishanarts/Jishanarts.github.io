import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "/jishanarts.github.io", // Change this to your repo name
  trailingSlash: true,
};

module.exports = nextConfig;


export default nextConfig;
