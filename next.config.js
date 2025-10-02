/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-image-domain.com'],
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true // Temporarily ignore ESLint errors during build
  }
}

module.exports = nextConfig