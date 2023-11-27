import { ChatRoom } from "@/lib/models/chatroom.model"


export async function GET() {
  const createdRoom = await ChatRoom.create({
  })

  return new Response(createdRoom._id)
}