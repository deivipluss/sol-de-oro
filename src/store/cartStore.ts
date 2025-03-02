import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem, ProductWithDetails } from '@/types'

interface CartStore {
  items: CartItem[]
  total: number
  itemCount: number
  addItem: (item: { product: ProductWithDetails; quantity: number }) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      total: 0,
      itemCount: 0,

      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find(
            (i) => i.product.id === item.product.id
          )

          const newItems = existingItem
            ? state.items.map((i) =>
                i.product.id === existingItem.product.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              )
            : [
                ...state.items,
                {
                  product: {
                    ...item.product,
                    // Asegurarnos que tenga las propiedades de CartProduct
                    price: typeof item.product.price === 'number' 
                      ? item.product.price 
                      : parseFloat(String(item.product.price))
                  },
                  quantity: item.quantity,
                },
              ]

          const total = newItems.reduce(
            (sum, i) => sum + i.product.price * i.quantity,
            0
          )

          const itemCount = newItems.reduce((sum, i) => sum + i.quantity, 0)

          return { items: newItems, total, itemCount }
        })
      },

      removeItem: (productId) => {
        set((state) => {
          const newItems = state.items.filter((i) => i.product.id !== productId)
          
          const total = newItems.reduce(
            (sum, i) => sum + i.product.price * i.quantity,
            0
          )
          
          const itemCount = newItems.reduce((sum, i) => sum + i.quantity, 0)
          
          return { items: newItems, total, itemCount }
        })
      },

      updateQuantity: (productId, quantity) => {
        set((state) => {
          if (quantity <= 0) {
            return state
          }
          
          const newItems = state.items.map((i) =>
            i.product.id === productId ? { ...i, quantity } : i
          )
          
          const total = newItems.reduce(
            (sum, i) => sum + i.product.price * i.quantity,
            0
          )
          
          const itemCount = newItems.reduce((sum, i) => sum + i.quantity, 0)
          
          return { items: newItems, total, itemCount }
        })
      },

      clearCart: () => {
        set({ items: [], total: 0, itemCount: 0 })
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)