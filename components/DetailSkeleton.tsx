import { Skeleton } from "@nextui-org/react";

const DetailSkeleton = () => {
  return (
  
      <div className="w-full h-full ">
        <div className="mx-auto px-4 py-10 sm:px-6 max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <div className="flex flex-col justify-start items-start">

          <Skeleton className=" mt-4 w-full rounded-lg">
          <div className="h-4 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className=" mt-4 w-full rounded-lg">
          <div className="h-5 w-1/2 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className=" mt-4 w-full rounded-lg">
          <div className="h-5 w-1/2 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className=" mt-4 w-full rounded-lg">
          <div className="h-10 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className=" mt-4 w-full rounded-lg">
          <div className="h-3 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
            </div>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Skeleton className="rounded-xl aspect-square" />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Skeleton className="aspect-square h-8 w-full  rounded-xl" />
       
          </div>
        </div>
      </div>
   
  );
}
 
export default DetailSkeleton;
