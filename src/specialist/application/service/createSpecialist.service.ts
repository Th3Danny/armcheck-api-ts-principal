import { validateEspecialista } from "../../domain/validations/especialista.validation";
import { EspecialistaRepository } from "../../domain/repository/especialista.repository";
import { Especialista, EspecialistaResponse } from "../../domain/entities/index.entities";

export class CrearEspecialistaService {
    constructor (private readonly especialistaRepository: EspecialistaRepository) { }
    async run (especialista: Especialista): Promise<EspecialistaResponse> {
        try {
            const especialistaValidado = validateEspecialista(especialista);
            if (especialistaValidado.success) {
                const especialistaCreado = await this.especialistaRepository.create(especialista);
                return especialistaCreado;
            }
            throw new Error("Crear el especialista tiene el error que "+especialistaValidado.error.message);
        } catch (error: any) {
            console.error(error);
            throw new Error('Error al crear el especialista'+error.message);
        }
    }
}
