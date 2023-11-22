'use client'

import { signal } from '@preact/signals'
import Image from 'next/image'

const Like = () => {
  const isLiked = signal(false)

  const toggleLike = () => {
    isLiked.value = true
  }
  
  return (
    <button onClick={toggleLike}>
      <Image
        src={isLiked.value ? '/assets/heart-filled.svg' : '/assets/heart-gray.svg'}
        alt='heart'
        width={24}
        height={24}
        className='cursor-pointer object-contain'
      />
    </button>
  )
}

export default Like
