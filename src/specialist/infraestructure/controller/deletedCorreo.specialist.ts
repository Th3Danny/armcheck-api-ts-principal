import { Request, Response } from "express";
import { DeletedSpecialistService } from "../../application/service/index.service";

export class DeletedSpecialistController {
    constructor(private readonly deletedSpecialistService: DeletedSpecialistService) { }
    async deletedSpecialist(req: Request, res: Response) {
        try {
            const { correo } = req.params;
            const ResponseDeleted = await this.deletedSpecialistService.run(correo);
            if (ResponseDeleted === true) {
                res.status(200).json({ message: "Especialista eliminado" });
            } else {
                res.status(400).json({ message: "Error al ejecutar la accion de eliminar el especialista" });
            }
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}
