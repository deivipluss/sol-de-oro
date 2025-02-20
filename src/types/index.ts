import { Prisma, Product, Category, Order, OrderStatus, OrderItem } from '@prisma/client'

// Tipos base para Productos
export type ProductWithDetails = Prisma.ProductGetPayload<{
  include: {
    category: true
    images: true
  }
}> & {
  price: number | Prisma.Decimal
}

export type ProductCreateInput = {
  name: string
  description: string
  price: number
  categoryId: string
  images: string[]
  isAvailable?: boolean
}

export type ProductUpdateInput = Partial<ProductCreateInput>

// Tipos para el Carrito
export type CartItem = {
  product: Omit<ProductWithDetails, 'price'> & { price: number } // Aseguramos que price sea number en el carrito
  quantity: number
}

export type CartStore = {
  items: CartItem[]
  total: number
  itemCount: number
  addItem: (item: { product: ProductWithDetails; quantity: number }) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

// Tipos para Órdenes
export type OrderWithDetails = Order & {
  items: OrderItemWithDetails[]
  total: number
  status: OrderStatus
  customerName: string
  customerEmail: string
  whatsapp: string
  paymentProof?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export type OrderItemWithDetails = OrderItem & {
  product: ProductWithDetails
}

export type OrderCreateInput = {
  items: {
    productId: string
    quantity: number
    price: number
    name: string
  }[]
  customerName: string
  customerEmail?: string
  whatsapp: string
  paymentProof?: string
  notes?: string
}

// Tipos para Categorías
export type CategoryWithProducts = Category & {
  products: ProductWithDetails[]
}

export type CategoryCreateInput = {
  name: string
  description?: string
  image?: string
}

export type CategoryUpdateInput = Partial<CategoryCreateInput>

// Tipos para Filtros y Búsqueda
export type ProductFilters = {
  categoryId?: string
  minPrice?: number
  maxPrice?: number
  search?: string
  isAvailable?: boolean
  sortBy?: SortOption
  page?: number
  limit?: number
}

export type SortOption = {
  field: 'price' | 'name' | 'createdAt' | 'category'
  direction: 'asc' | 'desc'
}

// Tipos para Respuestas API
export type ApiResponse<T> = {
  success: boolean
  data?: T
  error?: string
  message?: string
  statusCode?: number
}

export type PaginatedResponse<T> = ApiResponse<T> & {
  items: T[]
  total: number
  page: number
  totalPages: number
  hasMore: boolean
  nextPage?: number
  prevPage?: number
}

// Tipos para Estado Global
export type AppStore = {
  isCartOpen: boolean
  isMenuOpen: boolean
  toggleCart: () => void
  toggleMenu: () => void
}

// Tipos para Errores
export type AppError = {
  message: string
  code?: string
  statusCode?: number
  details?: Record<string, unknown>
}

// Tipos de Utilidad
export type WithTimestamps = {
  createdAt: Date
  updatedAt: Date
}

export type WithId = {
  id: string
}