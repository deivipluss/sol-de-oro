'use client';

import { Suspense } from 'react'
import MenuHeader from '@/components/menu/MenuHeader'
import ProductGrid from '@/components/menu/ProductGrid'
import { prisma } from '@/lib/prisma'
import Loading from './loading'
import type { Metadata } from 'next'
import { ProductWithDetails } from '@/types'
import { Category } from '@prisma/client'
import PlaceholderImage from '@/components/ui/PlaceholderImage'

export const metadata: Metadata = {
  title: 'Menú | Sol de Oro',
  description: 'Explora nuestro menú de platillos y bebidas tradicionales peruanos',
  keywords: ['restaurante peruano', 'menu', 'comida peruana', 'sol de oro', 'tacna'],
  openGraph: {
    title: 'Menú | Sol de Oro',
    description: 'Descubre nuestra selección de platillos peruanos tradicionales',
    type: 'website',
    locale: 'es_PE',
    siteName: 'Sol de Oro Restaurant',
    images: [
      {
        url: '/images/og-menu.jpg',
        width: 1200,
        height: 630,
        alt: 'Menú Sol de Oro Restaurant'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menú | Sol de Oro Restaurant',
    description: 'Explora nuestra carta de platillos peruanos tradicionales',
    images: ['/images/og-menu.jpg']
  }
}

// Revalidar la página cada minuto
export const revalidate = 60

interface MenuData {
  products: ProductWithDetails[]
  categories: Category[]
}

async function getMenuData(): Promise<MenuData> {
  try {
    const [products, categories] = await Promise.all([
      prisma.product.findMany({
        include: {
          category: true,
          images: true
        },
        where: {
          isAvailable: true
        },
        orderBy: [
          {
            category: {
              name: 'asc'
            }
          },
          {
            name: 'asc'
          }
        ]
      }),
      prisma.category.findMany({
        orderBy: {
          name: 'asc'
        },
        where: {
          products: {
            some: {
              isAvailable: true
            }
          }
        }
      })
    ])

    return { 
      products: products.map(product => ({
        ...product
      })),
      categories 
    }
  } catch (error) {
    console.error('Error fetching menu data:', error)
    throw new Error('No se pudo cargar el menú. Por favor, intente más tarde.')
  }
}

export default async function MenuPage() {
  const { products, categories } = await getMenuData()

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <MenuHeader />
        
        <Suspense fallback={<Loading />}>
          <ProductGrid 
            initialData={{
              products,
              categories
            }}
          />
        </Suspense>
      </div>
    </main>
  )
}