'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

export const dynamic = 'force-dynamic'
const Page: FC = () => {
  let roomIdInput = ''
  const router = useRouter()

  const createRoom = async () => {
    const res = await fetch('/api/room/create')
    const roomId: string = await res.text()
    router.push(`/chat/room/${roomId}`)
  }

  const joinRoom = async (roomId: string) => {
    router.push(`/chat/room/${roomId}`)
  }
  return (
    <div  className='w-full flex justify-normal items-start gap-4 '>
      <Button onClick={createRoom}>Create room</Button>
      <div className='flex gap-2 '>
        <input
          type='text'
          onChange={({ target }) => (roomIdInput = target.value)}
          className='border border-zinc-300'
        />

        <Button onClick={() => joinRoom(roomIdInput)}>Join room</Button>
      </div>
    </div>
  )
}

export default Page
