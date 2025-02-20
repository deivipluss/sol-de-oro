import { NextApiRequest, NextApiResponse } from 'next'
import { useCartStore } from '@/store/cartStore'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { items, total, itemCount, addItem, removeItem, updateQuantity, clearCart } = useCartStore.getState()

  switch (req.method) {
    case 'GET':
      res.status(200).json({ items, total, itemCount })
      break
    case 'POST':
      const { product, quantity } = req.body
      addItem({ product, quantity })
      res.status(201).json({ message: 'Producto agregado al carrito' })
      break
    case 'DELETE':
      const { productId } = req.body
      removeItem(productId)
      res.status(200).json({ message: 'Producto eliminado del carrito' })
      break
    case 'PUT':
      const { productId: updateProductId, quantity: updateQuantityValue } = req.body
      updateQuantity(updateProductId, updateQuantityValue)
      res.status(200).json({ message: 'Cantidad actualizada' })
      break
    default:
      res.status(405).json({ message: 'Método no permitido' })
      break
  }
}
