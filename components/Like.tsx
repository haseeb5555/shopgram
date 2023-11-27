'use client'

import { signal } from '@preact/signals'
import Image from 'next/image'
import { useState } from 'react'

const Like = () => {
 const [isLiked, setIsLiked] = useState( false)
    const toggleLike = () => {
    setIsLiked((prev) => !prev)
    }
  return (
    <button onClick={toggleLike}>
      <Image
        src={isLiked ? '/assets/heart-filled.svg' : '/assets/heart-gray.svg'}
        alt='heart'
        width={24}
        height={24}
        className='cursor-pointer object-contain'
      />
    </button>
  )
}

export default Like
