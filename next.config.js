/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add the distDir configuration
  distDir: 'dist',
  // Ensure compatibility with Vercel static deployments
  generateBuildId: async () => {
    return 'sol-de-oro-static-build'
  },
  // Disable setting trailingSlash to true for compatibility
  trailingSlash: false,
}

module.exports = nextConfig