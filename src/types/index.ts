// Importaciones simplificadas para evitar problemas
import { Product, Category } from '@prisma/client';

// Definición simple para evitar errores
export type ProductImage = {
  id: string;
  url: string;
  productId: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ProductWithDetails = Product & {
  category?: Category | null;
  images?: ProductImage[];
};

// Tipo para imágenes de restaurante/menú
export interface MenuImage {
  id?: string;
  url: string;
  alt?: string;
}

// Tipo seguro para usar en componentes que muestran productos
export interface DisplayProduct {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  imageUrl?: string;
  categoryId?: string | null;
  categoryName?: string | null;
}

// Función auxiliar para convertir ProductWithDetails a DisplayProduct
export function convertToDisplayProduct(product: any): DisplayProduct {
  let imageUrl: string | undefined = undefined;
  
  // Intentar extraer la URL de la imagen de manera segura
  if (product.images && Array.isArray(product.images) && product.images.length > 0) {
    const firstImage = product.images[0];
    if (firstImage && typeof firstImage === 'object' && 'url' in firstImage) {
      imageUrl = firstImage.url;
    }
  }
  
  return {
    id: product.id || '',
    name: product.name || '',
    description: product.description || null,
    price: typeof product.price === 'number' ? product.price : 0,
    imageUrl: imageUrl,
    categoryId: product.categoryId || null,
    categoryName: product.category?.name || null
  };
}

// Tipos para el Carrito
export type CartProduct = Omit<ProductWithDetails, 'price'> & {
  price: number
}

export type CartItem = {
  product: CartProduct
  quantity: number
}

export type CartStore = {
  items: CartItem[]
  total: number
  itemCount: number
  addItem: (item: { product: ProductWithDetails; quantity: number }) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

// Resto del código simplificado
export type OrderWithDetails = {
  id: string;
  // Las propiedades específicas necesarias
};