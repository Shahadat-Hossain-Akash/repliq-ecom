import React from 'react'
import Link from 'next/link'


export default function Sidebar() {
    const list = ['orders', 'customers', 'products']
    return (
        <aside
        className={`text-black min-h-screen bg-zinc-100/50 rounded-2xl hidden md:block`}>
        <div className="p-2 ">
            <ul className="mb-4">
                {
                    list.map((item) => (
                        <Link key={item} href={`/admin/${item}`}>
                            <div className="py-2 px-4 w-48 mx-2 rounded-md  hover:bg-zinc-200 capitalize mt-2">
                                {item}
                            </div>
                        </Link>
                    ))
                }
            </ul>
        </div>
    </aside>
    )
}
