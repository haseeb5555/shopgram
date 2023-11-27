"use client"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Textarea } from "@/components/ui/textarea"
import {zodResolver} from '@hookform/resolvers/zod'
import { ProductValidation } from "@/lib/validations";
import * as z from  'zod' 
import {usePathname,useRouter} from 'next/navigation'
import Image from "next/image"
import { Input } from "./ui/input"
import { useUploadThing } from "@/lib/uploadthing"
import {useState,ChangeEvent} from 'react'
import { compressImage, isBase64Image } from "@/lib/utils"
import {useMutation} from '@tanstack/react-query'
import axios from 'axios';
import {toast, Toaster} from 'sonner'

    function PostProduct({userId}:{userId:string}){
        const [files, setFiles] = useState<File[]>([])
        const {startUpload}= useUploadThing('media');
        const router = useRouter();
        const pathname=usePathname();

        const form =useForm({
            resolver:zodResolver(ProductValidation),
            defaultValues:{
                name:'',
                price:'',
                quantity:'',
                image:"",
                author:userId
            }
        });

    const { mutate,isPending,variables } = useMutation({
            mutationFn: async (values:z.infer<typeof ProductValidation>) => {
                const {data} = await axios.post('/api/products',values)
                return data
            },
            onSuccess:()=>{
                toast.success('Product Added Successfully')
                form.reset()
               
            },
            onError:(err)=>{
                toast.error(err.message)
            }
        })
        const onSubmit= async(values:z.infer<typeof ProductValidation>)=>{
            const blob = values.image
            const hasIsImageChanged = isBase64Image(blob)

            if (hasIsImageChanged){
                const imgRes= await startUpload(files)

                if (imgRes && imgRes[0].fileUrl) {
                    values.image = imgRes[0].fileUrl
                }
            }

           mutate({author:userId,image:values.image,name:values.name,price:values.price,quantity:values.quantity  });
        }

        
  
        const handleImage = (e: ChangeEvent<HTMLInputElement>, fieldChange: (value: string) => void) => {
          e.preventDefault();
          const fileReader = new FileReader();
        
          if (e.target.files && e.target.value.length > 0) {
            const file = e.target.files[0];
        
            if (!file.type.includes('image')) {
              return;
            }
        
            fileReader.onload = async (event) => {
              const imageDataUrl = event.target?.result?.toString() || '';
              const compressedImageDataUrl = await compressImage(imageDataUrl);
              fieldChange(compressedImageDataUrl);
            };
        
            fileReader.readAsDataURL(file);
          }
        };
    return(
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" mt-10 flex flex-col justify-start gap-10">

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold ">
                Name
          </FormLabel>
              <FormControl className="no-focus border border-dark-4 ">
                <Input
                 
               
      
                {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        /> 
        <Toaster/>
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold ">
                Price
          </FormLabel>
              <FormControl className="no-focus border border-dark-4 ">
                <Input
                 
               
      
                {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        /> 
         <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold ">
                Description
          </FormLabel>
              <FormControl className="no-focus border border-dark-4 ">
                <Textarea
                  rows={5}
               
      
                {...field}
                />
              </FormControl>
            </FormItem>
          )}
        /> 
         <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="">{

                field.value&&(
                  <Image
                   src={field.value}
                   alt="image"
                   width={96}
                   height={96}
                   priority
                   className="rounded-lg object-contain"
                  />
                // ):(

                //   <Image
                //   src="/assets/profile.svg"
                //   alt="profile_photo"
                //   width={24}
                //   height={24}
            
                //   className=" object-contain"
                //  />
                )
          }
          </FormLabel>
              <FormControl className="flex-1 text-base-semibold ">
                <Input
                type="file"
                accept="image/*"
                placeholder="Upload a photo"
                className=""
                onChange={(e)=>handleImage(e,field.onChange)}
                
                />
              </FormControl>
            </FormItem>
          )}
        />   
         <Button type="submit" className="dark:bg-primary-500 bg-slate-200 text-black dark:text-light-1">
               Add
              </Button>
            </form>
          
            </Form>
    )
}

export default PostProduct;