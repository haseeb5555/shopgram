import Image from 'next/image';
import Link from 'next/link';
import AddToCartButton from './AddToCardButton';
interface Props{
    name:string,
    image:string,
    quantity:string,
    price:string
    _id:string
     author:string
  }
const ProductCard = ({name,image,quantity,price,_id,author}:Props) => {
  const product ={
    name,
    image,
    quantity,
    price,
    _id,
    author
  }
  return (
    <div className="flex flex-col relative height-auto text-foreground box-border bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none overflow-visible h-auto lg:h-[240px] dark:border-transparent" >
      <div className="flex w-full p-3 flex-auto place-content-inherit align-items-inherit h-auto break-words text-left subpixel-antialiased relative flex-col md:flex-row md:items-center gap-4 md:gap-9 overflow-visible">
        {/* Image Section */}
        <div className="flex-none w-full sm:w-48 h-48 mb-6 sm:mb-0 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-br transition-all !ease-soft-spring !duration-500 will-change-auto before:transition-all before:rounded-2xl before:from-[#010187] before:to-[#18000E]">
          {/* Image */}
        <Image
        alt={name}
        className="opacity-100 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none object-[45%_50%] sm:scale-125 absolute z-10 sm:left-2 inset-0 w-full h-full object-cover rounded-lg transition-all will-change-auto !ease-soft-spring !duration-300"
        height={200}
        src={image}
        width={200}
      />
        </div>

        {/* Product Information Section */}
        <div className="flex flex-col justify-center transition-all h-[200px] ml-2">
          <div className="relative flex flex-wrap items-baseline">
            {/* Product Title */}
            <h1 className="relative w-full flex-none text-xl font-semibold text-foreground">{name}</h1>
            {/* Product Description */}
            <p className="my-2 w-full text-base text-default-500">{quantity}</p>
            {/* Product Price */}
            <p className="relative text-lg font-semibold text-foreground">{price}$</p>
            {/* Original Price */}
            <p className="relative line-through font-semibold text-default-400 ml-3">$350</p>
            {/* Discount */}
            <p className="relative font-normal text-success ml-3">20% off</p>
          </div>

    
          {/* <div className="relative flex flex-col gap-2 my-4" aria-label="select size" role="radiogroup" aria-orientation="horizontal" id="react-aria-:R56cjlkpla:">
   
          </div> */}

          {/* Action Buttons */}
          <div className="flex space-x-6 mt-2">
            <Link href={`productDetail/${_id}`}>
            <button className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 gap-unit-2 rounded-medium [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg shadow-primary/40 bg-primary text-primary-foreground data-[hover=true]:opacity-hover text-sm font-normal" type="button">
              Buy now
            </button>
            </Link>
            <AddToCartButton product={product} />
          </div>
        </div>

        {/* Like Button */}
        <button className="z-0 group inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-unit-2 rounded-full px-unit-0 !gap-unit-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent data-[hover=true]:bg-default/40 min-w-unit-10 w-unit-10 h-unit-10 absolute top-3 right-3 text-default-400 data-[liked=true]:text-warning" type="button" aria-label="like" data-liked="false">
          <svg aria-hidden="true" fill="none" focusable="false" height="20" role="presentation" viewBox="0 0 24 24" width="20">
            <path d="M13.73 3.51001L15.49 7.03001C15.73 7.52002 16.37 7.99001 16.91 8.08001L20.1 8.61001C22.14 8.95001 22.62 10.43 21.15 11.89L18.67 14.37C18.25 14.79 18.02 15.6 18.15 16.18L18.86 19.25C19.42 21.68 18.13 22.62 15.98 21.35L12.99 19.58C12.45 19.26 11.56 19.26 11.01 19.58L8.01997 21.35C5.87997 22.62 4.57997 21.67 5.13997 19.25L5.84997 16.18C5.97997 15.6 5.74997 14.79 5.32997 14.37L2.84997 11.89C1.38997 10.43 1.85997 8.95001 3.89997 8.61001L7.08997 8.08001C7.61997 7.99001 8.25997 7.52002 8.49997 7.03001L10.26 3.51001C11.22 1.60001 12.78 1.60001 13.73 3.51001Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
