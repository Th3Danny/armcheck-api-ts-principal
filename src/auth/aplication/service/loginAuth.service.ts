import { Especialista } from "../../../specialist/domain/entities/index.entities";
import { EspecialistaRepository } from "../../../specialist/domain/repository/especialista.repository";
import { AuthResponse } from "../../domain/entities";
import { validateAuth } from "../../domain/validators/auth.validator";
import bcrypt from "bcrypt";
import { createJwt } from "../utils/createJWT.util";

export class LoginAuthService {
  constructor(private readonly especialistaRepository: EspecialistaRepository) {}
  async run(especialista: Especialista): Promise<AuthResponse> {
    try {
      const resultValidation = validateAuth(especialista);
      if (resultValidation.success) {
        const response = await this.especialistaRepository.findByEmail(especialista.correo);
        //se checan credenciales
    
        const isPasswordValid = this.compareCredentials(
          especialista,
          response.contrasena
        );
        if (isPasswordValid) {
          const jwt = createJwt(especialista);
          console.log(jwt)
          //Se crea el token y se envia;
          const responseToken: AuthResponse = {
            token: jwt,
          };
          return responseToken;
        }
        throw new Error(`correo o contraseña no validas`);
      }
      throw new Error(resultValidation.error.message);
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  }

  private compareCredentials(especialista: Especialista, passwordRequest: string): boolean {
    const correctPassword = bcrypt.compareSync(especialista.contrasena, passwordRequest);
    return correctPassword;
  }
}
