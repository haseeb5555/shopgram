import Post from "@/components/Post";
import PostProduct from "@/components/PostProduct";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchUser } from "@/lib/actions/user.action";
import {currentUser} from "@clerk/nextjs"
import { redirect } from "next/navigation";

const PostTabs = [
   {value:'want to post?',label:'want to post?'},
   {value:'want to add Product?',label:'want to add product?'},
]

async function Page () {

     const user = await currentUser();
     if(!user) return null;
     const userInfo = await fetchUser(user.id)
      if(!userInfo?.onboarded) redirect('/onboarding')
   return (
   <>
   
   <h1 className="head-text">Create</h1>
   <div className="mt-9">

       <Tabs defaultValue="want to post?" className="w-full">
        <TabsList className="tab" >
           {PostTabs.map((tab)=>(
            <TabsTrigger key={tab.label} value={tab.value} className="tab">
              
              <p className="">{tab.label}</p>
             
            
            </TabsTrigger>
           ))}
        </TabsList>
        {PostTabs.map((tab)=>(
            <TabsContent key={`content-${tab.label}`} value={tab.value} className="w-full ">
            {tab.value==='want to post?'?
            <Post
            userId={userInfo._id}
            />:
             <PostProduct userId={userInfo._id}/>
            }
            </TabsContent>
        ))}
       </Tabs>
    </div>
   </>
   
   
   )

}

export default Page;