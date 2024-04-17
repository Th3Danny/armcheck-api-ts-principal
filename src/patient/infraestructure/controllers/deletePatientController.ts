import { Request, Response } from "express";
import { DeletePacienteByIdService } from "../../application/service/deletePatientService";

export class DeletePacienteByIdController{
    constructor (private readonly deletePacienteService: DeletePacienteByIdService){}
    async run(req: Request, res: Response) {
        try {
            const id_persona: number | undefined = parseInt(req.params.id_persona, 10);
            console.log()

            if (isNaN(id_persona) || id_persona === undefined) {
                return res.status(400).json("ID de persona no proporcionado o no válido");
            }

            const handleError = await this.deletePacienteService.run(id_persona);

            if (handleError) {
                return res.status(200).json("Eliminación correcta");
            }

            return res.status(404).json("Error al eliminar el persona");
        } catch (err: any) {
            return res.status(500).send(err.message);
        }
    }
}