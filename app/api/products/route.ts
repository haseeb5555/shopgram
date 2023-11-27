import { connectToDB } from "@/lib/models/connection";
import { Product } from "@/lib/models/product.model";
import User from "@/lib/models/user.model";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
      try {
        
          const {name,price,image,quantity,author}= await req.json()
         await connectToDB();
       const createdProduct=  await Product.create({
                name,
                price,
                image,
                quantity,
                author
             })
    
         await User.findByIdAndUpdate(author,{
            $push:{products:createdProduct._id}
         })
         revalidatePath('/')
         return NextResponse.json({message:'Product created successfully',createdProduct})
      } catch (error:any) {
        console.log(error)
      }

     }


     export async function GET(){
      try {
        
      await connectToDB();
       const products=  await Product.find().populate({
        path: "author",
        model: User,
      })
    
         return NextResponse.json({products})
      } catch (error:any) {
        return NextResponse.json({error})
      }
     }


     

