import React from 'react'
import Card from './Card'

export default function Product({title, data}) {
    let n;
    if (title == "Lastest Products") {
        n = 6
    } else {
        n = data
            ?.products
                ?.length
    }
    return (
        <div className='w-full h-full gap-2 flex flex-col mb-4'>
            <p className='text-3xl'>{title}</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4'>
                {
                    data
                        ?.products
                                ?.slice(0, n)
                                .map((product) => (<Card key={product.name} data={product}/>))
                }
            </div>

        </div>
    )
}
