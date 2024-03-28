import OrderDetail from '@/components/OrderDetail'
import React from 'react'

export default function OrderDetailsPage({params}) {
  return (
    <OrderDetail id={params.id}/>
  )
}
