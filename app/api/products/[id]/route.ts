import { connectToDB } from "@/lib/models/connection";
import { Product } from "@/lib/models/product.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}:{params:{id:string}}){
    const id =params.id;
    await connectToDB();
     const product =await Product.findOne({_id :  id});
    return NextResponse.json({product},{status:200})
    }