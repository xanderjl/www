const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
let nextConfig = {
  experimental: {
    appDir: true,
  },
}

nextConfig = withMDX(nextConfig)

module.exports = nextConfig