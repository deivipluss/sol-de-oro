/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // si usas cloudinary
    unoptimized: true // para deployments estáticos
  },
  // La configuración de experimental ya no es necesaria
  // experimental: {
  //   serverActions: true,
  // }
}

export default nextConfig
