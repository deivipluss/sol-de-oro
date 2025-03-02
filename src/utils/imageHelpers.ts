import { getImageUrl } from './imageUtils';

/**
 * Extrae la URL de la imagen de un producto de manera segura
 */
export function getProductImageUrl(product: any): string | undefined {
  // Si no hay producto, retornar undefined
  if (!product) return undefined;
  
  // Si ya tiene una URL directa
  if (product.imageUrl) {
    return product.imageUrl;
  }
  
  try {
    // Diferentes formas en que la imagen puede estar disponible
    if (product.image) {
      return typeof product.image === 'string' ? product.image : getImageUrl(product.image, 'food');
    }
    
    if (product.imageId) {
      return getImageUrl(product.imageId, 'food');
    }
    
    // Si tiene un array de imágenes
    if (product.images && Array.isArray(product.images) && product.images.length > 0) {
      const firstImage = product.images[0];
      
      // Si firstImage es un string
      if (typeof firstImage === 'string') {
        return firstImage;
      }
      
      // Si firstImage es un objeto
      if (firstImage && typeof firstImage === 'object') {
        // Intentar diferentes propiedades
        if ('url' in firstImage && firstImage.url) {
          return firstImage.url;
        }
        
        if ('imageId' in firstImage && firstImage.imageId) {
          return getImageUrl(firstImage.imageId, 'food');
        }
        
        if ('src' in firstImage && firstImage.src) {
          return firstImage.src;
        }
      }
    }
    
    // Si no se encuentra ninguna imagen
    return undefined;
    
  } catch (error) {
    console.error('Error al obtener la URL de la imagen:', error);
    return undefined;
  }
}
