import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem, ProductWithDetails, CartProduct } from '@/types'

interface CartStore {
  items: CartItem[]
  total: number
  itemCount: number
  addItem: (item: { product: ProductWithDetails; quantity: number }) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

const calculateTotals = (items: CartItem[]) => {
  return items.reduce(
    (acc, item) => ({
      total: acc.total + item.product.price * item.quantity,
      itemCount: acc.itemCount + item.quantity,
    }),
    { total: 0, itemCount: 0 }
  )
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      total: 0,
      itemCount: 0,

      addItem: ({ product, quantity }) =>
        set((state) => {
          // Convertir el producto a CartProduct
          const normalizedProduct: CartProduct = {
            ...product,
            price: Number(product.price)
          };

          const existingItem = state.items.find(
            (i) => i.product.id === normalizedProduct.id
          );

          const newItems = existingItem
            ? state.items.map((i) =>
                i.product.id === normalizedProduct.id
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              )
            : [...state.items, { product: normalizedProduct, quantity }];

          const { total, itemCount } = calculateTotals(newItems);

          return {
            items: newItems,
            total,
            itemCount,
          };
        }),

      removeItem: (productId) =>
        set((state) => {
          const newItems = state.items.filter((i) => i.product.id !== productId)
          const { total, itemCount } = calculateTotals(newItems)

          return {
            items: newItems,
            total,
            itemCount,
          }
        }),

      updateQuantity: (productId, quantity) =>
        set((state) => {
          const newItems = state.items
            .map((i) =>
              i.product.id === productId ? { ...i, quantity } : i
            )
            .filter((i) => i.quantity > 0)

          const { total, itemCount } = calculateTotals(newItems)

          return {
            items: newItems,
            total,
            itemCount,
          }
        }),

      clearCart: () => set({ items: [], total: 0, itemCount: 0 }),
    }),
    {
      name: 'cart-storage',
      skipHydration: true,
      version: 3,
    }
  )
)