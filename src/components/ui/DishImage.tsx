'use client';

import { useState } from 'react';
import PlaceholderImage from './PlaceholderImage';

interface DishImageProps {
  cloudinaryId?: string;
  name: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function DishImage({ cloudinaryId, name, width = 300, height = 200, className = '' }: DishImageProps) {
  // Solo usamos la URL de Cloudinary si el ID existe
  const imageUrl = cloudinaryId 
    ? `https://res.cloudinary.com/tu-usuario/image/upload/v1/${cloudinaryId}`
    : undefined;
  
  return (
    <PlaceholderImage
      src={imageUrl}
      category="food"
      text={name}
      width={width}
      height={height}
      className={`object-cover rounded-lg ${className}`}
    />
  );
}
