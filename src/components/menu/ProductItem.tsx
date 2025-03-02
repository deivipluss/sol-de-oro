import { DisplayProduct } from '@/types'; // Cambiado para simplificar
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import { getProductImageUrl } from '@/utils/imageHelpers';

interface ProductItemProps {
  product: any; // Usando 'any' temporalmente para evitar problemas de tipo
}

export default function ProductItem({ product }: ProductItemProps) {
  // Simplificando para evitar errores de conversión
  const displayProduct = product;
  
  // Obtener la URL de la imagen de manera segura
  const imageUrl = getProductImageUrl(displayProduct);
  
  return (
    <div className="product-card bg-white p-4 rounded-lg shadow-md h-full">
      <div className="product-image h-48 relative mb-3">
        <PlaceholderImage
          src={imageUrl}
          alt={displayProduct.name || 'Producto'}
          fill
          className="rounded-lg object-cover"
          category="food"
          text={displayProduct.name || 'Producto'}
        />
      </div>
      <div className="flex flex-col justify-between h-[calc(100%-12rem)]">
        <h3 className="font-bold text-gray-800 text-lg">{displayProduct.name || 'Producto'}</h3>
        {displayProduct.description && (
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{displayProduct.description}</p>
        )}
        <p className="text-amber-600 font-medium mt-auto pt-2">
          S/. {typeof displayProduct.price === 'number' ? displayProduct.price.toFixed(2) : '0.00'}
        </p>
      </div>
    </div>
  );
}
