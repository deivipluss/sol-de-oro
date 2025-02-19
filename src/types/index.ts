import { Product, Category, Order, OrderStatus, OrderItem } from '@prisma/client'

// Interfaces para Imágenes
export interface ProductImage {
  id: string
  url: string
  productId: string
}

// Interfaces para Productos
export type ProductWithDetails = Product & {
  category: Category
  images: ProductImage[]
  isAvailable: boolean
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

// Interfaces para el Carrito
export type CartItem = {
  product: ProductWithDetails
  quantity: number
}

export type CartStore = {
  items: CartItem[]
  total: number
  itemCount: number
  addItem: (product: ProductWithDetails) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

// Interfaces para Órdenes
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

// Interfaces para Categorías
export type CategoryWithProducts = Category & {
  products: ProductWithDetails[]
  createdAt: Date
  updatedAt: Date
}

export type CategoryCreateInput = {
  name: string
  description?: string
  image?: string
}

export type CategoryUpdateInput = Partial<CategoryCreateInput>

// Interfaces para Filtros y Búsqueda
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

// Interfaces para Respuestas API
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

// Interfaces para Estado Global
export type AppStore = {
  isCartOpen: boolean
  isMenuOpen: boolean
  toggleCart: () => void
  toggleMenu: () => void
}

// Interfaces para Errores
export type AppError = {
  message: string
  code?: string
  statusCode?: number
  details?: Record<string, unknown>
}