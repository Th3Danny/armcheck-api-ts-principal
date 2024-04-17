import { Router } from "express";

import { getPacienteController } from "./dependenciesPatient";
import { getPatientByIdController } from "./dependenciesPatient";
import { crearPacienteController } from "./dependenciesPatient";
import { updatePacienteController } from "./dependenciesPatient";
const pacienteRouter = Router();

pacienteRouter
.get('/', async (req,res) => {
    await getPacienteController.run(req,res);
})
.get('/:id', async (req,res)=>{
    await getPatientByIdController.run(req,res);
})
.post('/', async (req,res)=>{
    await crearPacienteController.run(req,res);
})
.put('/:id', async (req, res) => {
    await updatePacienteController.run(req, res);
  });
export default pacienteRouter;