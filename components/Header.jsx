'use client'
import React from 'react'
import {PiShoppingCartSimpleThin, PiShieldThin} from "react-icons/pi";
import {SiConfluence} from "react-icons/si";
import Link from 'next/link'
import {Button} from "@nextui-org/react";
import {GetTotalItems} from '../utils/getCartStatus'

export default function Header() {
    return (
        <section className='w-full h-20 flex justify-between items-center'>
            <Link href={'/'}>
            <div className='text-3xl font-bold w-full flex'><SiConfluence/></div>
            </Link>
            <div className='w-full flex'>
                <div className='w-full flex justify-end gap-4 font-medium items-center'>
                    <Link href={'/cart'}>
                        <div className='size-9 items-center flex justify-center rounded-full relative'>
                            <span
                                className='absolute bg-red-400 rounded-full flex items-center justify-center right-0 top-0 min-h-4 min-w-4 text-[10px]'>{GetTotalItems()}</span>
                            <PiShoppingCartSimpleThin size={28}/>
                        </div>
                    </Link>
                    <Link href={'/admin'}>
                        <li className='size-9 items-center flex justify-center rounded-full'><PiShieldThin size={28}/></li>
                    </Link>
                    <div className='gap-4 flex text-white'>
                        <Link href={'/register'}>
                            <Button color='primary' size='sm'>Register</Button>
                        </Link>
                        <Link href={'/signin'}>
                            <Button variant='ghost' size='sm' color='secondary'>Login</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
