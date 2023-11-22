import React from 'react'
import {Spinner} from "@nextui-org/react";
const loading = () => {
  return (
    <div className='flex  justify-center items-center'>
        <Spinner label="Profile Loading please wait!" color="secondary" labelColor="secondary"/>
    </div>
  )
}

export default loading