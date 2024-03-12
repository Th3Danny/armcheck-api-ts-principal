import { Router } from "express";
import { getAllSpecialistController, updateSpecialistController, deletedSpecialistController, crearEspecialistaController, getByCorreoSpecialistController } from "./dependencies.specialist"

const especialistaRouter = Router();

especialistaRouter.get("/", getAllSpecialistController.listSpecialist.bind(getAllSpecialistController));
especialistaRouter.put("/:correo", updateSpecialistController.updateSpecialist.bind(updateSpecialistController));
especialistaRouter.delete("/:correo", deletedSpecialistController.deletedSpecialist.bind(deletedSpecialistController));
especialistaRouter.post("/", crearEspecialistaController.crearEspecialista.bind(crearEspecialistaController));
especialistaRouter.get("/:correo", getByCorreoSpecialistController.getByCorreoSpecialist.bind(getByCorreoSpecialistController));


export { especialistaRouter }