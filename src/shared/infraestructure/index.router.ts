import { Router, Request, Response } from "express";
import { especialistaRouter } from "../../specialist/infraestructure/specialist.router";

const prefijo = "/api";
const indexRouter = Router();

indexRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

indexRouter.use(`${prefijo}/especialistas`, especialistaRouter);


export default indexRouter;