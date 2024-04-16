import { validateEspecialista } from "../../../specialist/domain/validations/especialista.validation";
import { Especialista } from "../../../specialist/domain/entities/especialista.objet";
import { EspecialistaRepository } from "../../../specialist/domain/repository/especialista.repository"
import { AuthResponse } from "../../domain/entities";
import { createContrasenaHash, createJwt } from "../utils";

export class RegisterAuthService {
  constructor(private readonly especialistaRepository: EspecialistaRepository) {}
  async run(especialista: Especialista): Promise<AuthResponse> {
    try {
      const resultValidation = validateEspecialista(especialista);
      if (resultValidation.success) {
        const isUserCreated = await this.existingEspecialista(resultValidation.data.correo);
        if (!isUserCreated) {
          const password = createContrasenaHash(resultValidation.data.contrasena);
          const newUser = {
            ...resultValidation.data,
            password,
          };
          const responseUser : any = await this.especialistaRepository.create(newUser);
          const jwt = createJwt(responseUser)
          const responseToke: AuthResponse = {
            token: jwt,
          };
          return responseToke;
        }
      }
      throw "Could not create"
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  }

  private async existingEspecialista(correo: string): Promise<boolean> {
    const existingUser = await this.especialistaRepository.findByEmail(correo);
    if (existingUser) return true;
    return false;
  }
}
