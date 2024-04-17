import { PacienteRepository } from "../../domain/repository/patientRepository";
import { PacienteResponse } from "../../domain/entities/patientResponse";

export class GetPacienteService {
    constructor(private readonly patientRepository: PacienteRepository) { }
    //checar si esta cosa se muere porque le estas enviando mas parametros en la promesa 
    async run(): Promise<PacienteResponse[]> {
        try {
            const response = await this.patientRepository.getPacientes();
                return response;
        } catch (err: any){
            console.log(err);
            throw new Error(err);
        }
    }
}
