import React from 'react'
import Image from 'next/image'

export default function HomePage() {
    return (
        <div className='w-full min-h-screen'>
            <div
                className='w-full h-[400px] md:h-[600px] relative bg-zinc-100 rounded-lg flex'>
                <Image
                    className='rounded-lg opacity-40 md:opacity-100'
                    src='/images/landing.png'
                    layout='fill'
                    objectFit='cover'
                    alt='Image'/>
                <div
                    className='w-full md:w-1/3 flex flex-col p-10 justify-center z-10 gap-2 md:gap-4'>
                    <span className=' text-red-600 text-md md:text-2xl'>Find your next favorite item and elevate your everyday life</span>
                    <span className='text-2xl md:text-5xl font-semibold'>Discover Your Next Favorite Find</span>
                    <button
                        className='w-fit text-ld md:text-xl text-white font-light bg-black px-4 py-2 rounded-md'>Take a tour</button>
                </div>
            </div>
        </div>
    )
}
