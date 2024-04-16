import { Router, Request, Response } from "express";
import { especialistaRouter } from "../../specialist/infraestructure/specialist.router";
import {authRouter} from "../../auth/infraestructure/auth.router";

const prefijo = "/api";
const indexRouter = Router();

indexRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

indexRouter.use(`${prefijo}/especialistas`, especialistaRouter);
indexRouter.use(`${prefijo}/auth`, authRouter);


export default indexRouter;