import prismaClient from "../prisma"

class ProfileUserService {
  async execete(user_id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
    });

    return user;
  }
}  
   

export { ProfileUserService }