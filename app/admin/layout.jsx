'use client'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React, { useState } from 'react'
import {CiMenuKebab} from "react-icons/ci"
import {TfiClose} from "react-icons/tfi"
import Link from 'next/link'

export default function AdminLayout({children}) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const list = ['orders', 'customers', 'products']
  return (
    <div className='min-h-screen flex w-full flex-col gap-4 mb-4'>
        <Header/>
        <div className='w-full flex flex-col md:flex-row gap-4'>
        <Sidebar/>
            <div className="w-full md:w-64 block md:hidden">
                <div className="mx-auto flex justify-end items-center">
                    <button
                        className="size-8 p-2 flex items-center justify-center bg-zinc-100/60 rounded-lg md:hidden text-white focus:outline-none"
                        onClick={toggleDropdown}>
                        {
                            isOpen
                                ? <TfiClose color="black"/>
                                : <CiMenuKebab color="black"/>
                        }
                    </button>
                </div>
            </div>
            <div className="mx-auto flex justify-end items-center md:hidden relative bg-slate-400 w-full">
                    {
                        isOpen && (
                            <div
                                className="absolute right-0 top-0 bg-black hover:bg-zinc-100 rounded-lg mt-2 z-50">
                                <ul className="py-2">
                                    {
                                        list.map((item) => (
                                            <Link key={item} href={`/admin/${item}`} >
                                                <li className="px-4 w-48 flex flex-row gap-2 py-2 cursor-pointer text-white text-sm mb-2 ">
                                                    {item}
                                                </li>
                                            </Link>
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    }
                </div>
                {children}
            </div>
    </div>
  )
}
