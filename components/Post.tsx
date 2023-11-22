"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Textarea } from "@/components/ui/textarea"
import {zodResolver} from '@hookform/resolvers/zod'
import { ThreadValidation } from "@/lib/validations";

import * as z from  'zod' 
import {usePathname,useRouter} from 'next/navigation'
import { createThread } from "@/lib/actions/post.action"
import Image from "next/image"
import { Input } from "./ui/input"
import { useUploadThing } from "@/lib/uploadthing"
import {useState,ChangeEvent} from 'react'
import { isBase64Image } from "@/lib/utils"



  
  function Post({userId}:{userId:string}){
    const [files, setFiles] = useState<File[]>([])
    const {startUpload}= useUploadThing('media');
    const router = useRouter();
    const pathname=usePathname();
  
   const form =useForm({
     resolver:zodResolver(ThreadValidation),
     defaultValues:{
       thread :'',
       accountId:userId,
       image:"" || undefined
     }
   });

   const onSubmit= async(values:z.infer<typeof ThreadValidation>)=>{


     const blob = values.image
    const hasIsImageChanged = isBase64Image(blob)

    if (hasIsImageChanged){

      const imgRes= await startUpload(files)

      if (imgRes && imgRes[0].fileUrl)
      {
        values.image = imgRes[0].fileUrl
      }
    }
    await createThread({
        text:values.thread,
        author:userId,
        image:values.image,
        path:pathname
    })

     router.push('/')
   }
  
   const handleImage=(e:ChangeEvent<HTMLInputElement>,fieldChange:(value:string)=>void)=>{
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files && e.target.value.length>0){
      const file = e.target.files[0];

      setFiles(Array.from(e.target.files))

      if (!file.type.includes('image')) return;

      fileReader.onload = async (event)=>{

      const imageDataUrl = event.target?.result?.toString()|| ''

      fieldChange(imageDataUrl)
      }

      fileReader.readAsDataURL(file)
    }
  }
    return(

        <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className=" mt-10 flex flex-col justify-start gap-10">

        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold ">
                Content
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
         <Button type="submit" className="dark:bg-primary-500 bg-slate-200">
               Post
              </Button>
            </form>
          
            </Form>
       
    )
}

export default Post;