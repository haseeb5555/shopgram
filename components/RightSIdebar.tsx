"use client"

import axios from "axios"
import {useQuery} from '@tanstack/react-query'
import ProductCard from "./ProductCard"
import React from "react";

import {ScrollShadow} from "@nextui-org/react";
import Link from "next/link";


function RightSidebar  () {

    const {data}=useQuery({
        queryKey:['products'],
        queryFn:async()=>await axios.get('http://localhost:3000/api/products')    
    })
    console.log(data)

    return (
      <>
    
      <ScrollShadow className="w-[500px] h-[500px] custom-scrollbar rightsidebar mr-4 max-sm:hidden " hideScrollBar={false} orientation="vertical">
      
             <h3 className="text-heading4-medium ">Suggested Products</h3>
          <div className="flex flex-1 flex-row  flex-wrap gap-4 justify-start ">

              
             {data && data?.data.products?.map((product:any)=>(
                    <>
                {console.log(product)}
                    <Link href={`/productDetail/${product._id}`}>

                 
                    <ProductCard key={product._id} name ={product.name} image={product.image} price={product.price}
                     quantity={product.quantity} 
                    />
                  
                    </Link>
                    </>
                )
             )}
          </div>


     
      </ScrollShadow>
   
         
      </>
    )
  }
  
  export default RightSidebar