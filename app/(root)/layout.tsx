import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { Providers } from './providers'
import { ClerkProvider } from '@clerk/nextjs'
import LeftSidebar from '@/components/LeftSideBar'
import RightSidebar from '@/components/RightSIdebar'
import { currentUser } from '@clerk/nextjs'
import Topbar from '@/components/Topbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shopgram',
  description: 'Shopgram is a social media platform for shopping',
  creator:'@Haseeb',
  

}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await currentUser()
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Providers themeProps={{attribute:'class',defaultTheme:'dark'}}>
          {/* <Navbar/> */}
          <Topbar/>
          <main className='flex flex-row'>
            {
              user?<LeftSidebar/>:null

            }
          <section className='main-container'>
             <div className='w-full max-w-xl'>
               {children}
             </div>
          </section>
    
          <RightSidebar />
         
         </main>
         {/* <Footer/> */}
        {/* <Bottombar/> */}
        
        </Providers>
        </body>
    </html>
    </ClerkProvider>
  )
}

