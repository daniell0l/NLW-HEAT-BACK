import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateMessageController } from "./controller/CreateMessageController";
import { GetLast3MessageController } from "./controller/GetLast3MessageController";
import { ProfileUserController } from "./controller/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

const authenticateUserController = new AuthenticateUserController();
 
router.post("/authenticate", authenticateUserController.handle);
router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)

router.get("/messages/last3", new GetLast3MessageController().handle)
router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

export { router };