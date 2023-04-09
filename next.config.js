/* eslint-disable @typescript-eslint/no-var-requires */
const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  output: 'export'
};

module.exports = withMDX(nextConfig);
