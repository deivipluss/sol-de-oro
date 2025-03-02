'use client'

import { useState } from 'react'
import { ProductWithDetails } from '@/types'
import { Category } from '@prisma/client'
import { motion, AnimatePresence } from 'framer-motion'
import SearchBar from './SearchBar'
import CategoryFilter from './CategoryFilter'
import ProductItem from './ProductItem' // Importar el componente independiente

interface ProductGridProps {
  initialData: {
    products: ProductWithDetails[]
    categories: Category[]
  }
}

export default function ProductGrid({ initialData }: ProductGridProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredProducts = initialData.products.filter(product => {
    const matchesCategory = selectedCategory ? product.categoryId === selectedCategory : true
    const matchesSearch = searchQuery.trim() 
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true
    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <SearchBar 
          onSearch={setSearchQuery}
          searchQuery={searchQuery}
        />
        <CategoryFilter 
          categories={initialData.categories}
          onFilterChange={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full"
              >
                <ProductItem product={product} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No se encontraron productos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}