import { Request, Response } from "express";
import { GetPacienteByIdservice } from "../../application/service/getPatientByIdService";

export class GetPacienteByIdController {
    constructor(private readonly getPacienteByIdService: GetPacienteByIdservice) { }
    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const parseId = parseInt(id);
            const result = await this.getPacienteByIdService.run(parseId);
            res.status(200).send(result);
        }
        catch (err: any) {
            return res.status(500).send(err.message);
        }
    }
}