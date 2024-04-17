import { Paciente } from "../../domain/entities/patient";
import { PacienteResponse } from "../../domain/entities/patientResponse";
import { PacienteRepository } from "../../domain/repository/patientRepository";
import { validatePaciente } from "../../domain/validations/patientValidate";

export class CrearPacienteService{
    constructor (private readonly pacienteRepository: PacienteRepository){}
    async run (paciente: Paciente): Promise<PacienteResponse>{
        try {
            const pacienteValidado = validatePaciente(paciente);
            if (pacienteValidado.success) {
                const pacienteCreado = await this.pacienteRepository.postPaciente(paciente)
                return pacienteCreado;
            }
            throw new Error("Crear el especialista tiene el error que " + pacienteValidado.error.message);
        } catch (error: any) {
            console.error(error);
            throw new Error('Error al crear el especialista' + error.message);
        }
    }
}