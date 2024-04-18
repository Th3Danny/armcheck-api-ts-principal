import { Request, Response } from "express";
import { PostConsultaService } from "../../application/service/querieService";

export class PostConsultaController{
    constructor (private readonly crearConsultaService: PostConsultaService){}
    async run(req: Request, res:Response){
        try{
            const consulta = req.body;
            const result = await this.crearConsultaService.run(consulta);
            res.status(201).send(result);
        }catch (err: any) {
        return res.status(500).send(err.message);
      }
    }
}