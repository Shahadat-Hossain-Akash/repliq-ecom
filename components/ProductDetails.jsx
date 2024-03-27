import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Button} from "@nextui-org/react";

export default function ProductDetails({data}) {
    return (
        <div
            className='w-full min-h-screen flex flex-col md:flex-row gap-2 items-center'>
            <div
                className='w-full h-4/5 flex justify-center items-center overflow-hidden  relative'>
                <Image
                    width={500}
                    height={500}
                    src={data.imageLink}
                    objectFit='cover'
                    alt={`${data.name}`}
                    className='h-full w-4/5 bg-zinc-100 rounded-3xl'/>
            </div>
            <div className='w-full h-4/5 flex flex-col items-start gap-3'>
                <span className='text-5xl'>{data.name}</span>
                <span className='p-3 rounded-2xl text-zinc-500 bg-zinc-200 text-sm'>{data.category}</span>
                <span className='text-semibold text-5xl'>${data.price}</span>
                <span>{data.description}</span>
                <Button color='primary' className='text-white' size='lg'>Add to cart</Button>
            </div>
        </div>
    );
}
