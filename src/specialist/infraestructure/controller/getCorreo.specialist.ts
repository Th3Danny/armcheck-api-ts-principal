import { Request, Response } from "express";
import { GetByCorreoSpecialisService } from "../../application/service/index.service";

export class GetByCorreoSpecialistController {
    constructor(private readonly getByCorreoSpecialisService: GetByCorreoSpecialisService) { }
    async getByCorreoSpecialist(req: Request, res: Response) {
        try {
            const { correo } = req.params;
            const specialist = await this.getByCorreoSpecialisService.run(correo);
            res.status(200).json(specialist);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}