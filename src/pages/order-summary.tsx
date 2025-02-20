import React from 'react'
import { GetServerSideProps } from 'next'
import { PrismaClient } from '@prisma/client'
import { OrderWithDetails } from '@/types'
import OrderSummary from '@/components/OrderSummary'

const prisma = new PrismaClient()

interface OrderSummaryPageProps {
  order: OrderWithDetails
}

const OrderSummaryPage: React.FC<OrderSummaryPageProps> = ({ order }) => {
  return <OrderSummary order={order} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!

  const order = await prisma.order.findUnique({
    where: { id: String(id) },
    include: {
      items: {
        include: {
          product: {
            include: {
              category: true,
              images: true,
            },
          },
        },
      },
    },
  })

  if (!order) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      order: JSON.parse(JSON.stringify(order)),
    },
  }
}

export default OrderSummaryPage
