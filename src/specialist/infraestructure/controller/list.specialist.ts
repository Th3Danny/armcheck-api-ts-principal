import { Request, Response } from "express";
import { GetAllSpecialistService } from "../../application/service/index.service";

export class ListSpecialistController {
    constructor(private readonly getAllSpecialistService: GetAllSpecialistService) { }
    async listSpecialist(req: Request, res: Response) {
        try {
            const specialist = await this.getAllSpecialistService.run();
            res.status(200).json(specialist);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}