import { Request, Response } from "express";
import { GetLast3MessageService } from "../services/Getlast3MessagesService";

class GetLast3MessageController {
  async hendle(request: Request, response: Response) {
    const service = new GetLast3MessageService();

    const result = await service.execete();

    return response.json(result);

  }
}  
   

export { GetLast3MessageController }