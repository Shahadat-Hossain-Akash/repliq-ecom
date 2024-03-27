import Product from '@/components/Product'
import React from 'react'
import Header from '@/components/Header'
import data from '../../data/data'


export default function ProductPage() {
  return (
    <>
      < Header /> 
      <Product title={"All Products"} data={data}/>
    </>
  )
}
