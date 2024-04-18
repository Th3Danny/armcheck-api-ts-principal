import z from "zod";
import { Consulta } from "../entities/querie";

const ConsultaSchema = z.object({
   
      id_unico: z.string({
      invalid_type_error: "id_unico debe ser string",
      required_error: "id_unico is required",
    }),
    
  });
  
  export const validateConsulta = (consulta: Consulta) => {
    return ConsultaSchema.safeParse(consulta);
  };
  
  export const validatePartialConsulta = (consulta: Consulta) => {
    return ConsultaSchema.partial().safeParse(consulta);
  };