import React, { Suspense } from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import CardSkeleton from "./loading";


interface Props{
  name:string,
  image:string,
  quantity:string,
  price:string
  _id:string
}
export default function ProductCard({name,image,quantity,price,_id}:Props) {
  return (
   
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-[200px] h-[200px] relative"
     
    >
      <Image
        alt={name}
        className="object-cover"
        height={200}
        src={image}
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny">{name}</p>
        <Button className="text-tiny " variant="flat" color="default" radius="lg" size="sm">
          {price}$
        </Button>
      </CardFooter>
    </Card>
  
  );
}