import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({data}) {
    return (
        <div className='w-full h-full flex rounded-large p-2 flex-col'>
            <Link href={`/products/${data.id}`} className='gap-2 flex flex-col'>
                <div
                    className=' bg-zinc-100 rounded-large relative flex items-center justify-center overflow-hidden'>
                    <Image
                        src={data.imageLink}
                        alt={`${data.name}`}
                        width={300}
                        height={300}
                        objectFit='cover'
                        className='transition-transform hover:scale-105'/>
                </div>
                <div className='flex flex-col w-full'>
                    <span>{data.name}</span>
                    <span className=' text-zinc-400'>{data.category}</span>
                    <span className=' font-semibold'>${data.price}</span>
                </div>
            </Link>
        </div>
    )
}
