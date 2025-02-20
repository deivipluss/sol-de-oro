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
    (set, get) => ({
      items: [],
      total: 0,
      itemCount: 0,

      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find(
            (i) => i.product.id === item.product.id
          )

          const newItems = existingItem
            ? state.items.map((i) =>
                i.product.id === item.product.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              )
            : [...state.items, item]

          return {
            items: newItems,
            total: newItems.reduce(
              (sum, item) => sum + Number(item.product.price) * item.quantity,
              0
            ),
            itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
          }
        }),

      removeItem: (productId) =>
        set((state) => {
          const newItems = state.items.filter((i) => i.product.id !== productId)
          return {
            items: newItems,
            total: newItems.reduce(
              (sum, item) => sum + Number(item.product.price) * item.quantity,
              0
            ),
            itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
          }
        }),

      updateQuantity: (productId, quantity) =>
        set((state) => {
          const newItems = state.items.map((i) =>
            i.product.id === productId ? { ...i, quantity } : i
          ).filter((i) => i.quantity > 0)

          return {
            items: newItems,
            total: newItems.reduce(
              (sum, item) => sum + Number(item.product.price) * item.quantity,
              0
            ),
            itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
          }
        }),

      clearCart: () => set({ items: [], total: 0, itemCount: 0 }),
    }),
    {
      name: 'cart-storage',
      skipHydration: true,
    }
  )
)