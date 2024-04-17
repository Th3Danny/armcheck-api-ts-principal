import { Paciente } from "../entities/patient";

export interface PacienteRepository {
  getPacientes(): Promise<Paciente[]>;
  getPacienteById(pacienteId: number): Promise<Paciente>;
  postPaciente(paciente: Paciente): Promise<Paciente>
  update(id_persona : any ,paciente: Paciente): Promise<Paciente>;
  deletePacienteById(id_persona: number):Promise<void>
}
