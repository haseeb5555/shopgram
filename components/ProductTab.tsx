import React from "react";

import { fetchUserProducts } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import ProductCard from "./TestCard";

const ProductTab = async({accountId}:{accountId:string}) =>{
    let result :any;
    result = await fetchUserProducts(accountId)
    if (!result) redirect('/')
    console.log(result.products)
  

  return (
  
    <div className="w-full flex flex-col gap-10 mt-8 ">
    { result.products.map((item:any) => (
           
           <ProductCard
            key={item.name}
            image={item.image}
            quantity={item.quantity}
            price={item.price}
            name={item.name}
           
           
           />
          ))
         }

        </div>
     
   
  );
}
export default ProductTab