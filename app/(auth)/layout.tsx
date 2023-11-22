import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import { dark, neobrutalism, shadesOfPurple } from '@clerk/themes';
import '../globals.css'
const inter = Inter({subsets:['latin']});
export const metadata ={
    title:"Shopgram",
    description:"A next.js 1"
}

export default function RootLayout({children}:{children:React.ReactNode}){
    return (
        <ClerkProvider >
            <html lang="en">
                <body className={`${inter.className} bg-slate-200`}>
                    <div className="w-full flex justify-center items-center min-h-screen">

                    {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>
    )
}