import {Spinner} from "@nextui-org/react";
const loading = () => {
  return (
    <div className='flex  justify-center items-center'>
        <Spinner color="secondary" labelColor="secondary"/>
    </div>
  )
}

export default loading