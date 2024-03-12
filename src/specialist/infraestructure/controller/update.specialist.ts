import { Request, Response } from "express";
import { UpdateSpecialistService } from "../../application/service/index.service";

export class UpdateSpecialistController {
    constructor(private readonly updateSpecialistService: UpdateSpecialistService) { }
    async updateSpecialist(req: Request, res: Response) {
        try {
            const specialist = await this.updateSpecialistService.run(req.params.correo, req.body);
            res.status(200).json(specialist);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}