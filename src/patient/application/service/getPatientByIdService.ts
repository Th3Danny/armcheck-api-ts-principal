import { PacienteRepository } from "../../domain/repository/patientRepository";
import { PacienteResponse } from "../../domain/entities/patientResponse";

export class GetPacienteByIdservice {
    constructor(private readonly pacienteRepository: PacienteRepository) { }
    async run(pacienteId: number): Promise<PacienteResponse> {
        try {
            const response = await this.pacienteRepository.getPacienteById(pacienteId);
            console.log(response)
            return response;
        } catch (err: any) {
            console.log(err);
            throw new Error(err);
        }
    }
}