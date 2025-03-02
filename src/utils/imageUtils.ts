// Utilidad para manejar URLs de imágenes

export const getImageUrl = (cloudinaryId?: string, category: string = 'food'): string | undefined => {
  // Si estamos en desarrollo o staging, no intentamos cargar desde Cloudinary
  if (process.env.NODE_ENV !== 'production' || !cloudinaryId) {
    // Retornar imagen local placeholder según la categoría
    return `/images/placeholders/${category}.jpg`;
  }
  
  // En producción con ID válido, usar Cloudinary
  return `https://res.cloudinary.com/tu-usuario/image/upload/v1/${cloudinaryId}`;
};
