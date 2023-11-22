import PostsTab from "@/components/PostTab";
import ProductTab from "@/components/ProductTab";
import ProfileHeader from "@/components/ProfileHeader";

import { Tabs ,TabsContent,TabsList, TabsTrigger, } from "@/components/ui/tabs";
import { profileTabs } from "@/constants";
import { fetchUser } from "@/lib/actions/user.action";
import {currentUser} from "@clerk/nextjs"

import Image from "next/image";
import { redirect } from "next/navigation";

const Page = async ({params}:{params:{id:string}}) => {

    const user = await currentUser();
     if(!user) return null;
     const userInfo = await fetchUser(params.id)
      if(!userInfo?.onboarded) redirect('/onboarding')
  return (
    <section>
 
    <ProfileHeader
      accountId={userInfo.id}
      authUser={user.id}
      name={userInfo.name}
      username={userInfo.username}
      imgUrl={userInfo.image}
      bio={userInfo.bio}

    
    />
    <div className="mt-9">

       <Tabs defaultValue="Store" className="w-full">
        <TabsList className="tab" >
           {profileTabs.map((tab)=>(
            <TabsTrigger key={tab.label} value={tab.value} className="tab">
              <Image
               src={tab.icon}
               alt={tab.label}
                width={24}
                height={24}
                className="object-contain"
              
              />
              <p className="max-sm:hidden">{tab.label}</p>
              {tab.label=== 'All Posts' && (
                <p className="ml-1 rounded-sm bg-light-4 px-2 py-1 !text-tiny-medium text-light-2 ">
                  {userInfo?.threads?.length}
                </p>
              )}
            </TabsTrigger>
           ))}
        </TabsList>
        {profileTabs.map((tab)=>(
            <TabsContent key={`content-${tab.label}`} value={tab.value} className="w-full text-light-1">

              {
                tab.value === 'All Posts' ? (
                  <PostsTab
                  currentUserId={user.id}
                   accountId={userInfo.id}
                   accountType="User"
                  />
                ):(
                  <ProductTab accountId={userInfo.id}/>
                )
              }
             
            </TabsContent>
        ))}
       </Tabs>
    </div>
    </section>
  )
}

export default Page


