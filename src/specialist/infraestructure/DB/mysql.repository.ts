import { db } from "../../../shared/application/mysqlConnection";
import { EspecialistaRepository } from "../../domain/repository/especialista.repository";
import { Especialista } from "../../domain/entities/especialista.objet";

export class MysqlEspecialistaRepository implements EspecialistaRepository {
    async create(especialista: Especialista): Promise<Especialista> {
        await db.query(
            `INSERT INTO especialista (nombre, apellido, correo, contrasena, telefono, especialidad) VALUES (?, ?, ?, ?, ?)`,
            [especialista.nombre, especialista.apellido, especialista.correo, especialista.contrasena, especialista.especialidad]
        );
        return especialista;
    }

    async findByEmail(correo: string): Promise<Especialista> {
        const especialista = await db.query(
            `SELECT * FROM especialista WHERE correo = ?`,
            [correo]
        );
        //posible error
        return especialista[0] as unknown as Especialista;
    }
    
    async update(correo: string ,especialista: Especialista): Promise<Especialista> {
        await db.query(
            `UPDATE especialista SET nombre = ?, apellido = ?, correo = ?, contrasena = ?, especialidad = ? WHERE correo = ?`,
            [especialista.nombre, especialista.apellido, especialista.correo, especialista.contrasena, especialista.especialidad, correo]
        );
        return especialista;
    }

    async delete(correo: string): Promise<boolean> {
        await db.query(
            `DELETE FROM especialista WHERE correo = ?`,
            [correo]
        );
        return true;
    }

    async list(): Promise<Especialista[]> {
        const especialistas = await db.query(
            `SELECT * FROM especialista`
        );
        //posible error
        return especialistas as unknown as Especialista[];
    }
}
