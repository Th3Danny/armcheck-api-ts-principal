import { Response, Request, NextFunction } from "express";
import { TokenRepository } from "../../domain/repository/TokenRepository";
import { EspecialistaRepository } from "../../../specialist/domain/repository/especialista.repository";

export class VerifyTokenService {
  constructor(
    private readonly tokenRepository: TokenRepository,
    private readonly especialistaRepository: EspecialistaRepository
  ) { }
  async run(req: Request, res: Response, next: NextFunction) {
    try {
      const especialistaPrem = await this.especialistaRepository.findByEmailPremium(
        req.body.correo
      );
      const infoEspecialistaPrem = especialistaPrem as any;
      if (infoEspecialistaPrem.cantidad_citas > 100) {
        if (!infoEspecialistaPrem.fecha_inicio || !infoEspecialistaPrem.fecha_fin) {
          return res.status(401).send({
            message: "No puedes agendar más citas, ya cumpliste las 100 citas gratuitas, compra un plan premium",
          });
        }
        if (new Date(infoEspecialistaPrem.fecha_fin) < new Date()) {
          return res.status(401).send({
            message: "No puedes agendar más citas, ya acabó tu plan, compra un plan premium nuevo",
          });
        }
      }
      let token = req.get("Authorization");
      if (token) {
        token = token.substring(7);
        this.tokenRepository.verifyToken(token);
        next();
      } else {
        return res.status(401).send({ message: "Token inexistente" });
      }
    } catch (err: any) {
      return res.status(401).send({
        message: "Token invalido",
        error: err.message,
      });
    }
  }
}
