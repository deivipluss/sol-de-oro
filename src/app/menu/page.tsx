import { Suspense } from 'react'
import MenuHeader from '@/components/menu/MenuHeader'
import ProductGrid from '@/components/menu/ProductGrid'
import { prisma } from '@/lib/prisma'
import Loading from './loading'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menú | Sol de Oro',
  description: 'Explora nuestro menú de platillos y bebidas tradicionales peruanos',
  keywords: ['restaurante peruano', 'menu', 'comida peruana', 'sol de oro'],
  openGraph: {
    title: 'Menú | Sol de Oro',
    description: 'Descubre nuestra selección de platillos peruanos',
    type: 'website',
    locale: 'es_PE',
    siteName: 'Sol de Oro Restaurant',
    images: [
      {
        url: '/images/og-menu.jpg',
        width: 1200,
        height: 630,
        alt: 'Menú Sol de Oro'
      }
    ]
  }
}

export const revalidate = 60

async function getMenuData() {
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
        }
      })
    ])

    return { products, categories }
  } catch (error) {
    console.error('Error fetching menu data:', error)
    throw new Error('Failed to fetch menu data')
  }
}

export default async function MenuPage() {
  const { products, categories } = await getMenuData()

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
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