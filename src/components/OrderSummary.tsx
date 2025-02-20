import React from 'react'
import { OrderWithDetails } from '@/types'

interface OrderSummaryProps {
  order: OrderWithDetails
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ order }) => {
  return (
    <div>
      <h2>Resumen de la Orden</h2>
      <div>Nombre del Cliente: {order.customerName}</div>
      <div>Email del Cliente: {order.customerEmail}</div>
      <div>WhatsApp: {order.whatsapp}</div>
      <div>Total: {order.total}</div>
      <div>Estado: {order.status}</div>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            <div>{item.product.name}</div>
            <div>{item.product.price.toString()}</div> {/* Asegúrate de convertir Decimal a string */}
            <div>Cantidad: {item.quantity}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OrderSummary
