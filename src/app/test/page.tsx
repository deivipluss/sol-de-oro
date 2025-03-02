'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TestPage() {
  const [imageStatus, setImageStatus] = useState<{[key: string]: boolean}>({});
  const imagePaths = [
    '/images/hero/hero-background.jpg',
    '/images/specialties/pollo-brasa.jpg',
    '/images/specialties/parrillada.jpg',
    '/images/specialties/criolla.jpg',
    '/images/categories/pollos.jpg',
    '/images/categories/parrillas.jpg',
    '/images/categories/criollos.jpg',
    '/images/categories/bebidas.jpg',
    '/images/ui/logo.png'
  ];
  
  useEffect(() => {
    const checkImage = async (path: string) => {
      try {
        const img = new Image();
        
        const promise = new Promise<boolean>((resolve) => {
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
        });
        
        img.src = path;
        const exists = await promise;
        setImageStatus(prev => ({ ...prev, [path]: exists }));
      } catch (error) {
        setImageStatus(prev => ({ ...prev, [path]: false }));
      }
    };
    
    imagePaths.forEach(checkImage);
  }, []);
  
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-8">Prueba de imágenes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {imagePaths.map(path => (
          <div 
            key={path}
            className="bg-white border rounded-lg p-4 shadow-sm"
          >
            <h2 className="font-medium mb-2">{path}</h2>
            <div className="aspect-[16/9] relative bg-gray-100 rounded overflow-hidden mb-2">
              <div className="absolute inset-0 flex items-center justify-center">
                {imageStatus[path] === undefined ? (
                  <p className="text-gray-400">Verificando...</p>
                ) : imageStatus[path] ? (
                  <img 
                    src={path}
                    alt={`Imagen ${path}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p>Imagen no encontrada</p>
                  </div>
                )}
              </div>
            </div>
            <div className={`text-sm ${imageStatus[path] ? 'text-green-600' : 'text-red-600'}`}>
              {imageStatus[path] !== undefined && (
                imageStatus[path] ? '✓ Imagen cargada correctamente' : '✗ Error al cargar la imagen'
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
