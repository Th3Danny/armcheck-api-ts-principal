import z from 'zod';
import { Especialista } from '../entities/index.entities';

const especialistaSchema = z.object({
    nombre: z.string({
        required_error: 'El nombre es requerido',
        invalid_type_error: 'El nombre debe ser de tipo string'
    }),
    apellido: z.string({
        required_error: 'El apellido es requerido',
        invalid_type_error: 'El apellido debe ser de tipo string'
    }),
    correo: z.string({
        required_error: 'El email es requerido',
        invalid_type_error: 'El email debe ser de tipo string'
    }),
    especialidad: z.string({
        required_error: 'La especialidad es requerida',
        invalid_type_error: 'La especialidad debe ser de tipo string'
    }),
    contrasena: z.string({
        required_error: 'La contraseña es requerida',
        invalid_type_error: 'La contraseña debe ser de tipo string'
    })
});

export const validateEspecialista = (especialista: Especialista) => {
    return especialistaSchema.safeParse(especialista);
};

export const validateEspecialistaPartial = (especialista: Partial<Especialista>) => {
    return especialistaSchema.partial().safeParse(especialista);
};