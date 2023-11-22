"use client"

import { sidebarLinks } from "@/constants"
import  Link  from "next/link"
import  Image from "next/image"
import {usePathname, useRouter} from 'next/navigation'
import { SignedIn,SignOutButton, useAuth} from '@clerk/nextjs'
import { ThemeSwitch } from "./theme-switcher"
function LeftSidebar (){

    const router= useRouter();
    const pathname= usePathname();
    const {userId}= useAuth();
  return (
    <section className="custom-scrollbar leftsidebar">
     <div className="flex w-full flex-1 flex-col gap">
         {sidebarLinks.map((link)=> {

         const isActive =pathname.includes(link.route) && link.route.length>1 || pathname === link.route;
              if (link.route === "/profile") link.route =`${link.route}/${userId}`
             return(
            <Link 
            href={link.route}
            key={link.label}
            className={`leftsidebar_link ${isActive&& 'dark:bg-primary-500 bg-slate-200'} `}

            
            >
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={24}
                  height={24}
                />
             
            </Link>
         )})}
         
        
     </div>
     <div className="mt-10 px-6">
     <SignedIn>
            <SignOutButton signOutCallback={()=>
            router.push('/sign-in')}>
             <div className='flex cursor-pointer gap-4 '>
                <Image
                 src='/assets/logout.svg'
                 width={24}
                 height={24}
                 alt='logout'
                />
        
             </div>
            </SignOutButton>
         </SignedIn>
        <ThemeSwitch className="mt-4"/>
    
     </div>
    </section>
  )
}

export default LeftSidebar