import { Request, Response } from "express";
import { GetPacienteService } from "../../application/service/getPatientService";

export class GetPacienteController{
    constructor(private readonly getPacienteService: GetPacienteService){}
    async run(req: Request, res: Response) {
        try {
          const result = await this.getPacienteService.run();
          res.status(200).send(result);
        } catch (err: any) {
          return res.status(500).send(err.message);
        }
      }
    }