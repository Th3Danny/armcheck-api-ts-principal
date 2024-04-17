import z from "zod";
import { Paciente } from "../entities/patient";

const PacienteSchema = z.object({
   
      nombres: z.string({
      invalid_type_error: "nombre debe ser string",
      required_error: "nombre is required",
    }),
    apellidos: z.string({
      invalid_type_error: "apellidos debe ser string",
      required_error: "apellidos is required",
    }),
    edad:z.number({
        invalid_type_error: "edad debe ser number",
        required_error: "edad is required",
      }),
      altura:z.number({
        invalid_type_error: "altura debe ser number",
        required_error: "altura is required",
      }),
      peso:z.number({
        invalid_type_error: "peso debe ser number",
        required_error: "peso is required",
      }),
      genero:z.string({
        invalid_type_error: "genero debe ser string",
        required_error: "genero is required",
      }),
  });
  
  export const validatePaciente = (paciente: Paciente) => {
    return PacienteSchema.safeParse(paciente);
  };
  
  export const validatePartialPaciente = (paciente: Paciente) => {
    return PacienteSchema.partial().safeParse(paciente);
  };