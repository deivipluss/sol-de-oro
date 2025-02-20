import { Prisma } from '@prisma/client'

export const formatPrice = (price: number | Prisma.Decimal) => {
  return Number(price).toFixed(2)
}

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('es-PE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}