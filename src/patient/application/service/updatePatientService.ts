import { validatePartialPaciente } from "../../domain/validations/patientValidate";
import { PacienteRepository } from "../../domain/repository/patientRepository";
import { Paciente } from "../../domain/entities/patient";
import { PacienteResponse } from "../../domain/entities/patientResponse";

export class ActualizarPacienteService{
    constructor (private readonly pacienteRepository: PacienteRepository){}
    async run(id_persona:number, paciente:Paciente): Promise<PacienteResponse>{
        try {
            const pacienteValidado = validatePartialPaciente(paciente);
            if (!pacienteValidado.success) {
                throw new Error('Invalid data');
            }
            const actualizarPaciente = await this.pacienteRepository.update(id_persona, paciente)
            return actualizarPaciente;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}