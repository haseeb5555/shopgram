'use client'


import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

const ProductDetail = ({params}:{params:{id:string}}) => {
    const { data ,isLoading  } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
          const response = await axios.get(`http://localhost:3000/api/products/${params.id}`);
          return response.data.product; 
      }})
    
     
  console.log(data)
  return (

   <h2>{JSON.stringify(data)}</h2>
  )
}

export default ProductDetail