/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Cambiamos a export para generar estático
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  reactStrictMode: true,
}

export default nextConfig
