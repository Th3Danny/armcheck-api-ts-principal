import { Router } from "express";

import { postConsultaController } from "./dependenciesQuerie";

const consultaRouter = Router();

consultaRouter
.post('/', async (req, res) => {
    await postConsultaController.run(req, res);
})

export default consultaRouter;
