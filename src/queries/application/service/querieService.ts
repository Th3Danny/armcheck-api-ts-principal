import { Consulta } from "../../domian/entities/querie";
import { ConsultaResponse } from "../../domian/entities/querieResponse";
import { ConsultaRepository } from "../../domian/repository/querieRepository";
import { validateConsulta } from "../../domian/validations/querievalidate";

export class PostConsultaService{
    constructor (private readonly consultaRepository: ConsultaRepository){}
    async run (consulta: Consulta): Promise<ConsultaResponse>{
        try {
            const consultaValidado = validateConsulta(consulta);
            if (consultaValidado.success) {
                // Obtener la fecha actual
                const fechaActual = new Date();
                consulta.fecha_consulta = fechaActual;

                const consultaCreada = await this.consultaRepository.postConsulta(consulta)
                return consultaCreada;


            }else{
                throw new Error("Crear el especialista tiene el error que " + consultaValidado.error.message);
            }                       
        } catch (error: any) {
            console.error(error);
            throw new Error('Error al crear el especialista' + error.message);
        }
    }
}