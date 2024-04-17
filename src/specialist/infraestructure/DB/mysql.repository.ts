import { db } from "../../../shared/application/mysqlConnection";
import { EspecialistaRepository } from "../../domain/repository/especialista.repository";
import { Especialista } from "../../domain/entities/especialista.objet";
import { RowDataPacket } from "mysql2";

export class MysqlEspecialistaRepository implements EspecialistaRepository {
    async create(especialista: Especialista): Promise<Especialista> {
        await db.query(
            `INSERT INTO especialistas (nombre, apellido, correo, contrasena, especialidad) VALUES (?, ?, ?, ?, ?)`,
            [especialista.nombre, especialista.apellido, especialista.correo, especialista.contrasena, especialista.especialidad]
        );
        return especialista;
    }

    async findByEmail(correo: string): Promise<Especialista> {
        const query = "select * from especialistas where correo = ?";
        return db.execute(query, [correo]).then((res: any) => {
            return res[0][0] as Especialista;
        });
    }

    async findByEmailPremium(correo: string): Promise<Especialista> {
        const query = " SELECT COUNT(c.id_consultas) AS cantidad_citas FROM armcheckdb.consultas c JOIN armcheckdb.pacientes pa ON c.id_paciente = pa.id_persona JOIN armcheckdb.especialistas e ON pa.id_especialista = e.id_especialista WHERE e.correo  = ? ";
        const query2 = "SELECT p.fecha_inicio, p.fecha_fin FROM armcheckdb.pagos AS p JOIN armcheckdb.especialistas AS e ON p.id_especialista = e.id_especialista WHERE e.correo = ? ORDER BY p.fecha_fin DESC LIMIT 1"
        const result1 = await db.execute(query, [correo]);
        const result2 = await db.execute(query2, [correo]);
        const especialista = {
            "cantidad_citas": (result1[0] as RowDataPacket[])[0].cantidad_citas,
            "fecha_inicio": (result2[0] as RowDataPacket[])[0].fecha_inicio,
            "fecha_fin": (result2[0] as RowDataPacket[])[0].fecha_fin
        }as unknown as Especialista;
        return especialista;
    }
    
    async update(correo: string ,especialista: Especialista): Promise<Especialista> {
        await db.query(
            `UPDATE especialistas SET nombre = ?, apellido = ?, correo = ?, contrasena = ?, especialidad = ? WHERE correo = ?`,
            [especialista.nombre, especialista.apellido, especialista.correo, especialista.contrasena, especialista.especialidad, correo]
        );
        return especialista;
    }

    async delete(correo: string): Promise<boolean> {
        await db.query(
            `DELETE FROM especialistas WHERE correo = ?`,
            [correo]
        );
        return true;
    }

    async list(): Promise<Especialista[]> {
        const especialistas = await db.query(
            `SELECT * FROM especialistas`
        );
        return especialistas as unknown as Especialista[];
    }
}
