'use client'
import React from 'react'
import {customers} from '@/data/data'


export default function CustomerDetail({id}) {
    return (
        <div className='w-full min-h-full flex flex-col gap-4'>
            <span className='text-3xl'>Customer Details</span>
            {
                customers
                    .filter((item) => item.id == id)
                    .map((customer) => (
                        <div
                            key={customer.id}
                            className='text-black flex flex-col gap-2 rounded-2xl w-full bg-zinc-50 p-4'>
                            <span className='text-2xl'>{customer.name}</span>
                            <span>{customer.phone}</span>
                            <span>{customer.email}</span>
                            <span>{customer.address}</span>

                        </div>
                    ))
            }
        </div>
    )
}
