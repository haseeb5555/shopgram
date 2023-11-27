import ProductDetail from '@/components/ProductDetail'
const page = ({params}:{params:{id:string}}) => {
  return (
    <ProductDetail params={params}/>
  )
}

export default page