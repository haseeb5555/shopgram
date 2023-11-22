import ProductDetail from '@/components/ProductDetail'
import React from 'react'

const page = ({params}:{params:{id:string}}) => {
  return (
    <ProductDetail params={params}/>
  )
}

export default page