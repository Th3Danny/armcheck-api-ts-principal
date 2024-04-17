import { Request, Response } from "express";
import { ActualizarPacienteService } from "../../application/service/updatePatientService";

export class UpdatePacienteController {
    constructor(private readonly actualizarPacienteService: ActualizarPacienteService) { }
    async run(req: Request, res: Response) {
        try {
            let personaId = (req.params);
            const paciente = await this.actualizarPacienteService.run(personaId, req.body);
            res.status(200).json(paciente);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }

    }
}
