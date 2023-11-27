'use client'

import { pusherClient } from '@/lib/pusher'
import Image from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { ScrollShadow } from '@nextui-org/react'

interface MessagesProps {
  initialMessages: {
    message: string
    _id: string
   
  }[]
  roomId: string
}

const Messages: FC<MessagesProps> = ({ initialMessages, roomId }) => {
  const [incomingMessages, setIncomingMessages] = useState<string[]>([])
  const messageEndRef= useRef<HTMLInputElement>(null)
 const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const channel = pusherClient.subscribe('chat')

    const handleIncomingMessage = (text: string) => {
      setIncomingMessages((prev) => [...prev, text])
      console.log(text)
    }

    channel.bind('incoming-message', handleIncomingMessage)

    return () => {
      channel.unbind('incoming-message', handleIncomingMessage)
      pusherClient.unsubscribe('chat')
    }
  }, [])

  const scrollTobottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' }) ;
  };

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [incomingMessages]);

  useEffect(() => {
    scrollTobottom();
  }, [initialMessages]);

  return (
    <ScrollShadow className='custom-scrollbar w-full h-[500px] ' hideScrollBar={false} orientation="vertical">
    <div>
      {initialMessages.map((message) => (
       <div className="chat chat-start">
       <div className="chat-image avatar">
         <div className="w-10 rounded-full">
           {/* <Image alt="chat-image" src={message.author.image} width={40} height={40} className='rounded-full' /> */}
         </div>
       </div>
       <div className="chat-header">
          {/* {message.author.name} */}
         <time className="text-xs opacity-50">12:45</time>
       </div>
       <div className="chat-bubble">{message.message}</div>
       <div className="chat-footer opacity-50">
         Delivered
       </div>
     </div>
      ))}
      {incomingMessages.map((text, i) => (
        <>
        { console.log(text)}
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble" ref={ref}>{text}</div>
          <div className="chat-footer opacity-50">
            Seen at 12:46
          </div>
        </div>
         </>
      ))}
    </div>
      <div ref={messageEndRef}></div>
    </ScrollShadow>
  )
}

export default Messages
