'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import { Check, Shield } from 'lucide-react'
import AddToCartButton from './AddToCardButton';
import Image from 'next/image';
import DetailSkeleton from './DetailSkeleton';
const BREADCRUMBS = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'Products', href: '/products' },
]


const ProductDetail = ({params}:{params:{id:string}}) => {

        const { data ,isLoading  } = useQuery({
            queryKey: ['product'],
            queryFn: async () => {
              const response = await axios.get(`/api/products/${params.id}`);
              return response.data; 
          }})
        
       


  return (
  <>
    {isLoading ? (
      <DetailSkeleton/>
    ):(<>
    
    
    <div className='bg-white dark:bg-black '>
    <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
      {/* Product Details */}
      <div className='lg:max-w-lg lg:self-end'>
        <ol className='flex items-center space-x-2'>
          {BREADCRUMBS.map((breadcrumb, i) => (
            <li key={breadcrumb.href}>
              <div className='flex items-center text-sm'>
                <Link
                  href={breadcrumb.href}
                  className='font-medium text-sm text-muted-foreground hover:text-gray-900'>
                  {breadcrumb.name}
                </Link>
                {i !== BREADCRUMBS.length - 1 ? (
                  <svg
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                    className='ml-2 h-5 w-5 flex-shrink-0 '>
                    <path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
                  </svg>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
         

        <div className='mt-4'>
          <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>
           {data?.product?.name}
          </h1>
        </div>
         

        <section className='mt-4'>
          <div className='flex items-center'>
            <p className='font-medium '>
            {data?.product?.price} $
            </p>

            <div className='ml-4 border-l text-muted-foreground border-gray-300 pl-4'>
              {/* {label} */}
            </div>
          </div>

          <div className='mt-4 space-y-6'>
            <p className='text-base text-muted-foreground'>
           { data?.product?.quantity}
            </p>
          </div>

          <div className='mt-6 flex items-center'>
            <Check
              aria-hidden='true'
              className='h-5 w-5 flex-shrink-0 text-green-500'
            />
            <p className='ml-2 text-sm text-muted-foreground'>
              Eligible for instant delivery
            </p>
          </div>
        </section>
      </div>

      {/* Product images */}
      <div className='mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center'>
        <div className='aspect-square rounded-lg'>
          <Image
           alt={data?.name}
            src={data?.product?.image}
            className='object-cover rounded-lg '
            width={400}
            height={400}
          
          
          />
        </div>
      </div>

      {/* add to cart part */}
      <div className='mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start'>
        <div>
          <div className='mt-10'>
            <AddToCartButton product={data} />
          </div>
          <div className='mt-6 text-center'>
            <div className='group inline-flex text-sm text-medium'>
              <Shield
                aria-hidden='true'
                className='mr-2 h-5 w-5 flex-shrink-0 text-gray-400'
              />
              <span className='text-muted-foreground hover:text-gray-700'>
                30 Day Return Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>)}
  </>
  )
}

export default ProductDetail