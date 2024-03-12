import { EspecialistaRepository } from "../../domain/repository/especialista.repository";

export class DeletedSpecialistService {
    constructor (private readonly specialistRepository: EspecialistaRepository) { }
    async run (correo: string): Promise<boolean> {
        try {
            await this.specialistRepository.delete(correo);
            return true;
        } catch (error: any) {
            console.error(error);
            throw new Error('Error al eliminar el especialista'+error.message);
        }
    }
}