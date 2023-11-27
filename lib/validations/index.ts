import *  as z from 'zod'

 export const ThreadValidation = z.object({

    thread:z.string().nonempty().min(3),
    accountId:z.string(),
    image:z.string().optional() || undefined
  
})
export const CommentValidation = z.object({

    thread:z.string().nonempty().min(3),
  
  
})



 export const UserValidation = z.object({

    profile_photo:z.string().url().nonempty(),
    name:z.string().min(3).max(30),
    username:z.string().min(3).max(30),
    bio:z.string().min(3).max(1000)
})

export const ProductValidation = z.object({
    _id:z.string().optional(),
    name:z.string().nonempty(),
    price:z.string().nonempty(),
    image:z.string().nonempty() || undefined,
    quantity:z.string().nonempty(),
    author:z.string().nonempty()

})


