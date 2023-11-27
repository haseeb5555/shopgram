'use client'

import axios from 'axios'
import { FC } from 'react'

interface MessageFieldProps {
  roomId: string,
  userId: string
}

const MessageField: FC<MessageFieldProps> = ({ roomId ,userId}) => {

  let input = ''

  const sendMessage = async (message: string) => {
    await axios.post('/api/message', { message, roomId ,author:userId })
    console.log('message sent', message)
  }

  console.log('roomId', roomId)
  console.log('userId', userId)
  

  return (
    <div className='relative w-full flex gap-2 px-4'>
   
      <input
        onChange={({ target }) => (input = target.value)}
        className='no-focus bg-transparent outline-none b rounded-2xl boder border-slate-200 w-full px-4 py-2'
        type='text'
        placeholder='type a message'
      />
      <button onClick={() => sendMessage(input)} className='absolute right-4 mt-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
</button>
    </div>
  )
}

export default MessageField
