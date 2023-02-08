/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader:"akamai",
    path: ""
  },
    basePath: "/portfolio-site-v3",
  assetPrefix: "/portfolio-site-v3"
}

module.exports = nextConfig
