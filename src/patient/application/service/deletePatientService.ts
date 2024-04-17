import { PacienteRepository } from "../../domain/repository/patientRepository";

export class DeletePacienteByIdService{
    constructor (private readonly pacienteRepository: PacienteRepository){}
    async run (id_persona: number): Promise<boolean>{
        try {
            const paciente = await this.pacienteRepository.deletePacienteById(id_persona);
            
                 await this.pacienteRepository.deletePacienteById(id_persona);
                 return true;
            
           
        } catch (err: any) {
            console.log(err);
            return false
          }
    }
}