import prismaClient from "../prisma"

class GetLast3MessageService {
  async execete() {
    const message = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: "desc"
      },      
      include: {
        user: true
      }
    })

    return message;
  }
}  
   

export { GetLast3MessageService }