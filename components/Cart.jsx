'use client'
import CartContext from '@/context/CartContext'
import React, { useContext } from 'react'
import Tiles from './Tiles'
import {Button} from "@nextui-org/react"
import Link from 'next/link'


export default function Cart() {
    const {cart, clearCart} = useContext(CartContext)
    console.log(cart)
  return (
    <div className='w-full min-h-screen flex flex-col gap-3'>
        <div className='w-full flex gap-2 items-center justify-between'>
        <span className='text-4xl'>Cart</span>
        <Button onClick={() => clearCart()} color='danger' variant='flat' disabled={cart.length == 0} size='sm'>Remove cart</Button>
        </div>
        {
            cart.length > 0 ? cart.map((item) => (
                <Tiles key={item.id} data={item}/>
            )) : <span>Cart is empty</span> 
        }
        <div className='w-full flex justify-end'>
        <Link href={'/checkout'} hidden={cart.length === 0}>
            <Button variant='shadow' color='primary' className='text-white'>Checkout</Button>
        </Link>
        </div>
    </div>
  )
}
