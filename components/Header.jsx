import React from 'react'
import {PiShoppingCartSimpleThin, PiShieldThin, PiSignInThin } from "react-icons/pi";
import { SiConfluence } from "react-icons/si";
import Link from 'next/link'
import {Button} from "@nextui-org/react";

export default function Header() {
    return (
        <section className='w-full h-20 flex justify-between items-center'>
            <div className='text-3xl font-bold w-full flex'><SiConfluence /></div>
            <div className='w-full flex'>
                <div className='w-full flex justify-end gap-4 font-medium items-center'>
                    <div className='size-9 items-center flex justify-center rounded-full'><PiShoppingCartSimpleThin size={28} /></div>
                    {/*  <li className='size-9 items-center flex justify-center rounded-full'><PiShie
 * ldThin size={32}/></li> 
 */
                    }
                    <div className='gap-4 flex text-white'>
                        <Link href={'/register'}>
                            <Button color='primary' size='sm'>Register</Button>
                        </Link>
                        <Link href={'/login'}>
                            <Button variant='ghost' size='sm' color='secondary'>Login</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
