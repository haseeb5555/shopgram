

import { create } from 'zustand'
import {
  createJSONStorage,
  persist,
} from 'zustand/middleware'
import { Product } from '@/types'


export type CartItem = {
  product:{
    product: Product
   
  }
}

type CartState = {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (_id: string | undefined) => void
  clearCart: () => void
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
     
      
      addItem: (product) =>{

        set((state) => {
          return  { items: [...state.items, { product:{product} }] }
        })
       
      },
      removeItem: (_id) =>
      set((state) => ({
        items: state.items.filter(
          (item) =>item.product.product._id !== _id ),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)







