import React from 'react'

const Test = async () => {
     await new Promise((resolve)=>setTimeout(resolve,1000))
  return (
    <div>Test......</div>
  )
}

export default Test