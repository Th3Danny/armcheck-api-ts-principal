import { EspecialistaRepository } from "../../domain/repository/especialista.repository";
import { EspecialistaResponse } from "../../domain/entities/index.entities";

export class GetByCorreoSpecialisService {
    constructor(private readonly especialistaRepository: EspecialistaRepository) {}
    async run(correo: string): Promise<EspecialistaResponse> {
        try {
            return await this.especialistaRepository.findByEmail(correo);
        } catch (error: any) {
            console.error(error);
            throw new Error('Error al obtener el especialista' + error.message);
        }
    }
}