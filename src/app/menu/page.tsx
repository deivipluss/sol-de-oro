import MenuHeader from '@/components/menu/MenuHeader'
import ProductGrid from '@/components/menu/ProductGrid'
import SearchBar from '@/components/menu/SearchBar'
import { prisma } from '@/lib/prisma'
import { MENU_CONFIG } from '@/config/menu'

export const revalidate = 60 // revalidate this page every 60 seconds

export default async function MenuPage() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
      images: true
    },
    where: {
      isAvailable: true
    },
    orderBy: {
      category: {
        name: 'asc'
      }
    },
    take: MENU_CONFIG.itemsPerPage
  })
  
  const categories = await prisma.category.findMany()

  return (
    <div className="container mx-auto px-4 py-8">
      <MenuHeader />
      <SearchBar onSearch={() => {}} />
      <ProductGrid products={products} categories={categories} />
    </div>
  )
}