'use client'

import { Category } from '@prisma/client'
import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CategoryFilterProps {
  categories: Category[]
  onFilterChange: (categoryId: string | null) => void
  selectedCategory: string | null
}

export default function CategoryFilter({ 
  categories, 
  onFilterChange, 
  selectedCategory: externalSelectedCategory 
}: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    externalSelectedCategory || null
  )

  useEffect(() => {
    setActiveCategory(externalSelectedCategory)
  }, [externalSelectedCategory])

  const handleCategoryClick = useCallback((categoryId: string | null) => {
    setActiveCategory(categoryId)
    onFilterChange(categoryId)
  }, [onFilterChange])

  const container = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm"
    >
      <AnimatePresence>
        <div className="flex gap-2 mb-8 overflow-x-auto py-2 px-4 scrollbar-hide">
          <motion.button 
            variants={item}
            onClick={() => handleCategoryClick(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full transition-colors duration-200 ${
              activeCategory === null 
                ? 'bg-amber-500 text-white shadow-lg ring-2 ring-amber-300' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            Todos
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={item}
              onClick={() => handleCategoryClick(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full transition-colors duration-200 whitespace-nowrap ${
                activeCategory === category.id 
                  ? 'bg-amber-500 text-white shadow-lg ring-2 ring-amber-300' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </AnimatePresence>
    </motion.div>
  )
}