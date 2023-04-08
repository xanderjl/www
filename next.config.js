/* eslint-disable @typescript-eslint/no-var-requires */
const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    appDir: true,
    mdxRs: true,
  }
};

module.exports = withMDX(nextConfig);
