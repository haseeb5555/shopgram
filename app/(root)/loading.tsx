import React from "react";
import {Skeleton} from "@nextui-org/react";

export default function loading() {
  return (
    <>
    <div className=" pl-8 mt-20 max-w-[500px] w-full flex items-center gap-3 ">
      <div>
        <Skeleton className=" flex rounded-full w-12 h-12"/>
        <Skeleton className="w-[2px] h-12 ml-6 mt-2"/>
      </div>  
      <div className="w-full flex flex-col gap-2 -mb-12 ">
        <Skeleton className="h-3 w-2/5 rounded-lg"/>
        <Skeleton className="h-3 w-full rounded-lg"/>
      <div className='mt-8 flex flex-row gap-3.5'>

      <Skeleton className="flex rounded-full w-6 h-6"/>
      <Skeleton className="flex rounded-full w-6 h-6"/>
      <Skeleton className="flex rounded-full w-6 h-6"/>
      <Skeleton className="flex rounded-full w-6 h-6"/>
      </div>
      </div>
    </div>
    <div className=" pl-8 mt-20 max-w-[500px] w-full flex items-center gap-3 ">
      <div>
        <Skeleton className=" flex rounded-full w-12 h-12"/>
        <Skeleton className="w-[2px] h-12 ml-6 mt-2"/>
      </div>  
      <div className="w-full flex flex-col gap-2 -mb-12 ">
        <Skeleton className="h-3 w-2/5 rounded-lg"/>
        <Skeleton className="h-3 w-full rounded-lg"/>
      <div className='mt-8 flex flex-row gap-3.5'>

      <Skeleton className="flex rounded-full w-6 h-6"/>
      <Skeleton className="flex rounded-full w-6 h-6"/>
      <Skeleton className="flex rounded-full w-6 h-6"/>
      <Skeleton className="flex rounded-full w-6 h-6"/>
      </div>
      </div>
    </div>
    <div className=" pl-8 mt-20 max-w-[500px] w-full flex items-center gap-3 ">
      <div>
        <Skeleton className=" flex rounded-full w-12 h-12"/>
        <Skeleton className="w-[2px] h-12 ml-6 mt-2"/>
      </div>  
      <div className="w-full flex flex-col gap-2 -mb-12 ">
        <Skeleton className="h-3 w-2/5 rounded-lg"/>
        <Skeleton className="h-3 w-full rounded-lg"/>
      <div className='mt-8 flex flex-row gap-3.5'>

      <Skeleton className="flex rounded-full w-6 h-6"/>
      <Skeleton className="flex rounded-full w-6 h-6"/>
      <Skeleton className="flex rounded-full w-6 h-6"/>
      <Skeleton className="flex rounded-full w-6 h-6"/>
      </div>
      </div>
    </div>
</>
  );
}

// // import React from 'react'

// // const loading = () => {
// //   return (
// //     <div>loading</div>
// //   )
// // }

// export default loading
