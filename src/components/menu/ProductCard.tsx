'use client'

import Image from 'next/image'
import { ProductWithDetails } from '@/types'
import { motion } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import { formatPrice } from '@/utils/format'
import { Prisma } from '@prisma/client'

interface ProductCardProps {
  product: ProductWithDetails
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isImageLoading, setIsImageLoading] = useState(true)
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem({
      product: {
        ...product,
        price: new Prisma.Decimal(product.price)
      },
      quantity: 1,
    })
    toast.success('Producto agregado al carrito', {
      duration: 2000,
      position: 'bottom-right',
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48 w-full bg-gray-100">
        {product.images && product.images[0] ? (
          <Image
            src={product.images[0].url}
            alt={product.name}
            fill
            className={`object-cover transition-opacity duration-300 ${
              isImageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={() => setIsImageLoading(false)}
            priority
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-gray-400">Sin imagen</span>
          </div>
        )}
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {product.description || 'Sin descripción'}
          </p>
        </div>

        <div className="pt-2">
          <span className="inline-block bg-amber-100 text-amber-800 rounded-full px-3 py-1 text-sm font-medium">
            {product.category.name}
          </span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-amber-600">
            S/. {formatPrice(product.price)}
          </span>
          <button
            className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 
                     transition-colors duration-200 flex items-center space-x-2"
            onClick={handleAddToCart}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
              <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span>Agregar</span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}