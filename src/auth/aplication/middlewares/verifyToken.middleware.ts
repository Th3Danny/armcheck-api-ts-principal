import { Response, Request, NextFunction } from "express";
import { TokenRepository } from "../../domain/repository/TokenRepository";
import { EspecialistaRepository } from "../../../specialist/domain/repository/especialista.repository";

export class VerifyTokenService {
  constructor(
    private readonly tokenRepository: TokenRepository,
    private readonly especialistaRepository: EspecialistaRepository
  ) {}
  async run(req: Request, res: Response, next: NextFunction) {
    try {
      let token = req.get("Authorization");
      const especialista = await this.especialistaRepository.findByEmailPremium(
        req.body.correo
      );
      console.log(especialista);
      if (token) {
        token = token.substring(7);
        this.tokenRepository.verifyToken(token);
        next();
      }
      return res.status(401).send({ message: "Token inexistente" });
    } catch (err: any) {
      return res.status(401).send({
        message: "Token invalido",
        error: err.message,
      });
    }
  }
}
