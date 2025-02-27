/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Para generar build estático
  images: {
    domains: ['res.cloudinary.com'],
    unoptimized: true  // Necesario para builds estáticos
  },
  trailingSlash: true  // Ayuda con rutas relativas
};

module.exports = nextConfig;