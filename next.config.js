/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
    unoptimized: true, // Esta línea es importante para despliegues estáticos
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Añadimos esta opción para que no falle si una imagen no se encuentra
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = nextConfig