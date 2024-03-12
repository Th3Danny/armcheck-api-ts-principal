import { validateEspecialistaPartial } from "../../domain/validations/especialista.validation";
import { EspecialistaRepository } from "../../domain/repository/especialista.repository";
import { Especialista, EspecialistaResponse } from "../../domain/entities/index.entities";

export class UpdateSpecialistService {
    constructor(private readonly especialistaRepository: EspecialistaRepository) { }
    async run(correo:string ,especialista: Especialista): Promise<EspecialistaResponse> {
        try {
            const especialistaValidated = validateEspecialistaPartial(especialista);
            if (!especialistaValidated.success) {
                throw new Error('Invalid data');
            }
            const updatedSpecialist = await this.especialistaRepository.update(correo ,especialista);
            return updatedSpecialist;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}