import { Router } from "express";
import {
loginAuthController,
registerAuthController,
} from "./auth.dependencies";

const authRouter = Router();

authRouter.get("/", loginAuthController.run.bind(loginAuthController));
authRouter.post("/register", registerAuthController.run.bind(registerAuthController));

export { authRouter };
