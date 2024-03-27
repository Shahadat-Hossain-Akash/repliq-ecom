import ProductDetails from '@/components/ProductDetails'
import React from 'react'
import data from '@/data/data'

export default function ProductDetailsPage({params}) {
    const product = data
        .products
        .find(
            (item) => item.id == params
                ?.id
        )
    return (<ProductDetails data={product}/>)
}
