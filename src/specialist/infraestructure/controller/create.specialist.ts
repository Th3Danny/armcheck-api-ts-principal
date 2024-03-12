import { Request, Response } from "express";
import { CrearEspecialistaService } from "../../application/service/index.service";

export class CrearEspecialistaController {
    constructor(private readonly crearEspecialistaService: CrearEspecialistaService) { }
    async crearEspecialista(req: Request, res: Response) {
        try {
            const especialista = await this.crearEspecialistaService.run(req.body);
            res.status(201).json(especialista);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}