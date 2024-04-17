import { Request, Response } from "express";
import { ActualizarPacienteService } from "../../application/service/updatePatientService";

export class UpdatePacienteController {
    constructor(private readonly actualizarPacienteService: ActualizarPacienteService) { }
    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const parseId = parseInt(id);
            const paci = req.body;
           const result = await this.actualizarPacienteService.run(parseId,paci)
            res.status(200).json(result);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }

    }
}
