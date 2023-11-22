import { SignedIn,SignOutButton ,OrganizationSwitcher, UserButton} from '@clerk/nextjs'

import Image from 'next/image'
import Link from 'next/link'
import {dark} from '@clerk/themes'
import { ThemeSwitch } from './theme-switcher'

import { currentUser } from '@clerk/nextjs'
import { Button } from './ui/button'

const Topbar = async() => {
  const user = await currentUser()
  return (
    <nav className='topbar'>
       <Link href="/" className='flex items-center gap-4'>
            <Image
              src='/assets/logo.svg'
              width={28}
              height={28}
              alt='logo'
            />
            <p className='text-heading3-bold  max-xs:hidden'>Shopgram</p>
       </Link>
       <div className='flex items-center gap-1'>
        <div className='block md:hidden'>
          <SignedIn>
            <SignOutButton>
             <div className='flex cursor-pointer'>
                <Image
                 src='/assets/logout.svg'
                 width={24}
                 height={24}
                 alt='logout'
                />
             </div>
            </SignOutButton>
         </SignedIn>
         
        </div>
         {!user && <Link href='/sign-in'><Button variant='outline'>Sign In/Sign Up</Button></Link>}
         <ThemeSwitch/>
         <UserButton  afterSignOutUrl='/sign-in'/>
        
       </div>
    </nav>
  )
}

export default Topbar
