'use client';

import { ProductWithDetails } from '@/types';
import { motion } from 'framer-motion';
import { getProductImageUrl } from '@/utils/imageHelpers';
import PlaceholderImage from '@/components/ui/PlaceholderImage';

interface ProductCardProps {
  product: ProductWithDetails;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  // Obtener URL de imagen de manera segura
  const imageUrl = getProductImageUrl(product);
  
  return (
    <motion.div 
      className="h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div className="relative h-48">
        <PlaceholderImage
          src={imageUrl}
          alt={product.name}
          fill
          className="object-cover"
          category="food"
          text={product.name}
        />
        
        {product.isAvailable === false && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              No disponible
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div>
          <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
          {product.description && (
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
          )}
        </div>
        
        <div className="mt-auto pt-4 flex justify-between items-end">
          <span className="text-amber-600 font-semibold">
            S/. {product.price.toFixed(2)}
          </span>
          
          <button 
            className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-md text-sm transition-colors"
          >
            Ordenar
          </button>
        </div>
        
        {product.category && (
          <div className="pt-2">
            <span className="inline-block bg-amber-100 text-amber-800 rounded-full px-3 py-1 text-sm font-medium">
              {product.category?.name || 'Sin categoría'}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}