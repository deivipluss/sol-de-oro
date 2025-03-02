'use client';

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

// Modificamos la definición de tipos para hacer alt opcional
interface PlaceholderImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src?: string;
  category?: 'food' | 'background' | 'logo' | 'general';
  text?: string;
  alt?: string; // Alt ahora es opcional
}

const PlaceholderImage = ({ 
  src, 
  category = 'general', 
  text,
  alt,
  className,
  ...props 
}: PlaceholderImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Colores por categoría
  const bgColors = {
    food: 'bg-amber-100',
    background: 'bg-amber-200',
    logo: 'bg-amber-50',
    general: 'bg-gray-100'
  };
  
  // Texto por categoría para usar como alt text si no se proporciona
  const placeholderText = text || {
    food: 'Imagen de plato',
    background: 'Imagen de fondo',
    logo: 'Logo',
    general: 'Imagen'
  }[category];
  
  // Intenta cargar la imagen real solo si hay una URL
  useEffect(() => {
    if (!src || typeof window === 'undefined') return;
    
    // Usamos HTMLImageElement en lugar de solo Image para evitar la colisión
    const imgElement = new window.Image();
    imgElement.src = src;
    imgElement.onload = () => setLoaded(true);
    imgElement.onerror = () => setError(true);
  }, [src]);
  
  if (!src || error) {
    return (
      <div 
        className={`${bgColors[category]} flex items-center justify-center ${className}`}
        style={props.fill ? {position: 'absolute', inset: 0} : {}}
      >
        <div className="text-amber-800 text-center p-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 mx-auto mb-2 opacity-60" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
          <p className="font-medium">{placeholderText}</p>
          {text && <p className="text-sm opacity-75 mt-1">{text}</p>}
        </div>
      </div>
    );
  }
  
  return (
    <Image
      src={src}
      alt={alt || placeholderText}
      className={className}
      {...props}
    />
  );
};

export default PlaceholderImage;
