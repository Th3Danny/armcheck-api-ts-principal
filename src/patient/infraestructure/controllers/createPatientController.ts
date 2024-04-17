import { Request, Response } from "express";
import { CrearPacienteService } from "../../application/service/createPatientService";

export class CreatePacienteController{
    constructor (private readonly crearPacienteService: CrearPacienteService){}
    async run(req: Request, res:Response){
        try{
            const paciente = req.body;
            const result = await this.crearPacienteService.run(paciente);
            res.status(201).send(result);
        }catch (err: any) {
        return res.status(500).send(err.message);
      }
    }
}