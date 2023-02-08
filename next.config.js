/** @type {import('next').NextConfig} */

// next.config.js
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: isProd ? true : false,
  assetPrefix: isProd ? '/portfolio-site-v3/' : '',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
