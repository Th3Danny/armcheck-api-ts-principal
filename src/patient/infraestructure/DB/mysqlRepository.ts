import { db } from "../../../shared/application/mysqlConnection";
import { Paciente } from "../../domain/entities/patient";
import { PacienteRepository } from "../../domain/repository/patientRepository";

export class MySQlRepositoryPaciente implements PacienteRepository{
    getPacientes(): Promise<Paciente[]> {
        const query = "SELECT * FROM pacientes"
        return db.execute(query).then((res: any) => {
            return res[0] as Paciente[];
          });
    }

    getPacienteById(pacienteId: number): Promise<Paciente> {
        const query = "SELECT * FROM pacientes where id_persona = ?";
      return db
        .execute(query, [pacienteId])
        .then((res: any) => {
          console.log(res);
          return res[0][0] as Paciente;
        })
        .catch((err: any) => {
          throw new Error(err);
        });
    }

    postPaciente(paciente: Paciente): Promise<Paciente> {
        const { id_especialista,nombres,apellidos,edad,altura,peso,genero  } = paciente;
      const query = `insert into pacientes (id_especialista, nombres, apellidos, edad, altura, peso, genero) values (?,?,?,?,?,?,?)`;
      return db
        .execute(query, [id_especialista,nombres,apellidos,edad,altura,peso,genero ])
        .then(() => {
          return paciente;
        })
        .catch((err: any) => {
          throw new Error(err);
        });
    }

    async update(id_persona: any, paciente: Paciente): Promise<Paciente> {
      console.log(id_persona)

      await db.query(
          `UPDATE pacientes SET  nombres = ?, apellidos = ?, edad = ?, altura = ? , peso = ?, genero = ? WHERE id_persona = ?`,
          [ paciente.nombres, paciente.apellidos, paciente.edad, paciente.altura, paciente.peso, paciente.genero, id_persona]
      );
      return paciente;
  }
  

    deletePacienteById(id_persona: number): Promise<void> {
        const query="delete from pacientes where id_persona = ?;"
      return db.execute(query,[id_persona]).then((res:any)=> res[0] as void)
    }
}