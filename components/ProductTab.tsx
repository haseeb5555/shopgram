import { fetchUserProducts } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";
import ProductCard from "./TestCard";

const ProductTab = async({accountId}:{accountId:string}) =>{
    let result :any;
    result = await fetchUserProducts(accountId)
    if (!result) redirect('/')
  return (
  
    <div className="w-full flex flex-col gap-10 mt-8 ">
    { result.products.map((item:any) => (
           
           <ProductCard
            key={item.name}
            image={item.image}
            quantity={item.quantity}
            price={item.price}
            name={item.name}
            _id={item._id}
            author={item.author}
           
           
           />
          ))
         }

 </div>
     
   
  );
}
export default ProductTab