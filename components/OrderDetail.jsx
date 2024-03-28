'use client'
import React from 'react'
import {orders} from '@/data/data'

export default function OrderDetail({id}) {
    return (
        <div className='w-full min-h-full flex flex-col gap-4'>
            <span className='text-3xl'>Orders Details</span>
            {
                orders
                    .filter((item) => item.id == id)
                    .map((order) => (
                        <div
                            key={order.id}
                            className='text-black flex flex-col gap-2 rounded-2xl w-full bg-zinc-50 p-4'>
                            <span className='text-2xl'>{order.name}</span>
                            <span>{order.phone}</span>
                            <span>{order.bill}</span>
                            <span>{order.date}</span>

                        </div>
                    ))
            }
        </div>
    )
}
