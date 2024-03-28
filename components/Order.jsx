'use client'
import React from 'react'
import Tables from './Tables'
import { orders, ordersColumn } from '@/data/data'

export default function Order() {
  return (
    <div className='w-full min-h-full flex flex-col gap-4'>
        <span className='text-3xl'>Orders List</span>
        <Tables data={orders} columns={ordersColumn}/>
    </div>
  )
}
