
import { connectToDB } from '@/lib/models/connection'
import { Message } from '@/lib/models/message.model'
import User from '@/lib/models/user.model'
import { pusherServer } from '@/lib/pusher'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { message, roomId ,author} = await req.json()

  pusherServer.trigger('chat', 'incoming-message', message)
  
        await connectToDB()
    const createdMessage=  await Message.create({
        message,
         chatRoomId: roomId,
         author: author, 
       })
   
  await User.findByIdAndUpdate(author,{
    $push:{messages:createdMessage._id}
 })

  return  NextResponse.json(({ message: 'Message sent successfully',createdMessage }))
}