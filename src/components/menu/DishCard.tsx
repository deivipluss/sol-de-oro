'use client';

import { getImageUrl } from '@/utils/imageUtils';
import PlaceholderImage from '@/components/ui/PlaceholderImage';

interface DishCardProps {
  name: string;
  description: string;
  price: number;
  cloudinaryId?: string;
}

export default function DishCard({ name, description, price, cloudinaryId }: DishCardProps) {
  // Usar imageUtils para obtener la URL
  const imageUrl = getImageUrl(cloudinaryId, 'food');
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 relative">
        <PlaceholderImage
          src={imageUrl}
          alt={name}
          category="food"
          text={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-amber-600 font-semibold">S/. {price.toFixed(2)}</span>
          <button className="btn-primary py-1 px-3 text-sm">Ordenar</button>
        </div>
      </div>
    </div>
  );
}
