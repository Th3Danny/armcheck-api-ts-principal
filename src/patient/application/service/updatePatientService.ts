import { validatePartialPaciente } from "../../domain/validations/patientValidate";
import { PacienteRepository } from "../../domain/repository/patientRepository";
import { Paciente } from "../../domain/entities/patient";
import { PacienteResponse } from "../../domain/entities/patientResponse";

export class ActualizarPacienteService{
    constructor (private readonly pacienteRepository: PacienteRepository){}
    async run(id_persona:number, paciente:Paciente): Promise<PacienteResponse>{
        try {
            const pacienteValidado = validatePartialPaciente(paciente);
            if (!pacienteValidado.success) 
                throw new Error(pacienteValidado.error.message);
            
            const originalPaciente = await this.pacienteRepository.getPacienteById(id_persona)
            if(!(paciente.nombres && paciente.apellidos && paciente.altura && paciente.edad && paciente.peso && paciente.genero && originalPaciente))
                throw new Error("Task not found");
            return await this.pacienteRepository.update(id_persona,paciente)
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}