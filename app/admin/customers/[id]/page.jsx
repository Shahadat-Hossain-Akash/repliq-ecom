import CustomerDetail from '@/components/CustomerDetail'
import React from 'react'

export default function CustomerDetailsPage({params}) {
  return (
    <CustomerDetail id={params.id}/>
  )
}
