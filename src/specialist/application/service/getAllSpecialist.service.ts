import { EspecialistaRepository } from "../../domain/repository/especialista.repository";
import { EspecialistaResponse } from "../../domain/entities/index.entities";

export class GetAllSpecialistService {
    constructor(private readonly specialistRepository: EspecialistaRepository) { }
    //checar si esta cosa se muere porque le estas enviando mas parametros en la promesa 
    async run(): Promise<EspecialistaResponse[]> {
        try {
            const specialists: any = await this.specialistRepository.list();
            return specialists[0];
        } catch (error: any) {
            console.error(error);
            throw new Error('Error al obtener los especialistas' + error.message);
        }
    }
}
