'use client'
import React, { useContext } from 'react'
import {Card, CardBody, CardFooter, Button} from "@nextui-org/react";
import Image from 'next/image'
import CartContext from '@/context/CartContext';

export default function Tiles({data}) {
    const {addItemToCart, removeItemFromCart, clearCart} = useContext(CartContext)
    return (
        <div className='w-full h-full gap-2 flex flex-col'>
        <Card className=' shadow-none flex-col  md:flex-row '>
            <CardBody className='flex-row gap-2 h-full'>
                <Image
                    src={data.imageLink}
                    width={100}
                    height={100}
                    alt=""
                    className=' bg-zinc-100 rounded-xl'/>
                <div className='flex flex-col '>
                    <span className='text-2xl'>{data.name}</span>
                    <span className='text-xl'>price: {data.price}</span>
                    <span>quantity: {data.quantity}</span>
                </div>
            </CardBody>
            <CardFooter className='flex w-full justify-end gap-3 text-white'>
                <Button onClick={()=> addItemToCart(data)} size='sm' color='primary'>Add to cart</Button>
                <Button onClick={()=> removeItemFromCart(data.id)} size='sm'>Remove item</Button>
            </CardFooter>
        </Card>
        </div>
    )

}
