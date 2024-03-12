import { EspecialistaRepository } from "../../domain/repository/especialista.repository";
import { EspecialistaResponse } from "../../domain/entities/index.entities";

export class GetAllSpecialistService {
    constructor(private readonly specialistRepository: EspecialistaRepository) { }
    //checar si esta cosa se muere porque le estas enviando mas parametros en la promesa 
    async run(): Promise<EspecialistaResponse[]> {
        try {
            return await this.specialistRepository.list();
        } catch (error: any) {
            console.error(error);
            throw new Error('Error al obtener los especialistas' + error.message);
        }
    }
}
