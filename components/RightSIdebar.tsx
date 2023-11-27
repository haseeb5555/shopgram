"use client"

import axios from "axios"
import {useQuery} from '@tanstack/react-query'
import ProductCard from "./ProductCard"
import React from "react";

import {ScrollShadow} from "@nextui-org/react";
import Link from "next/link";
import CardSkeleton from "./loading";


function RightSidebar  () {

    const {data,isLoading}=useQuery({
        queryKey:['products'],
        queryFn:async()=>await axios.get('/api/products')    
    })


    return (
      <>
       
      <ScrollShadow className="w-[500px] h-[500px] custom-scrollbar rightsidebar mr-4 max-sm:hidden " hideScrollBar={false} orientation="vertical">
        <h3 className="text-heading4-medium ">Suggested Products</h3>
          {isLoading ?(
           <CardSkeleton/>
           ):(<>
           
          <div className="flex flex-1 flex-row  flex-wrap gap-4 justify-start ">
                {
                     data?.data.products?.length===0 &&(
                        <p className="no-result">No product found!</p>
                     )
                }
             
             {data && data?.data.products?.map((product:any)=>(
                    <>
                  
                    <Link href={`/productDetail/${product._id}`}>

                 
                    <ProductCard key={product._id}  name ={product.name} image={product.image} price={product.price}
                     quantity={product.quantity}  _id={product._id}
                    />
                  
                    </Link>
             
                    </>
                )
             )}
            
          </div>
           </>)}


     
      </ScrollShadow>
   
         
      </>
    )
  }
  
  export default RightSidebar