'use client'

import { useState, useCallback } from 'react'
import { ProductWithDetails } from '@/types'
import { Category } from '@prisma/client'
import ProductCard from './ProductCard'
import CategoryFilter from './CategoryFilter'
import SearchBar from './SearchBar'
import { motion } from 'framer-motion'

interface ProductGridProps {
  products: ProductWithDetails[]
  categories: Category[]
}

export default function ProductGrid({ products, categories }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
  }, [])

  const handleCategoryChange = useCallback((categoryId: string | null) => {
    setSelectedCategory(categoryId)
  }, [])

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory ? product.categoryId === selectedCategory : true
    const matchesSearch = searchQuery.trim() !== '' ? 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.description?.toLowerCase() || '').includes(searchQuery.toLowerCase())
      : true
    return matchesCategory && matchesSearch
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="space-y-6">
      <div className="sticky top-0 z-10 bg-gray-50 pb-4 space-y-4">
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter 
          categories={categories} 
          onFilterChange={handleCategoryChange}
          selectedCategory={selectedCategory}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredProducts.map((product) => (
          <motion.div key={product.id} variants={item}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {filteredProducts.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-4"
        >
          <p className="text-gray-500 text-lg">
            No se encontraron productos
          </p>
          <button
            onClick={() => {
              setSearchQuery('')
              setSelectedCategory(null)
            }}
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            Limpiar filtros
          </button>
        </motion.div>
      )}
    </div>
  )
}