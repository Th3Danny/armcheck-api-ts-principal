import { PostConsultaService } from "../application/service/querieService";
import { PostConsultaController } from "./controllers/querieController";
import { MySQlRepositoryConsulta } from "./DB/mysqlRepository";

const mysqlRepository = new MySQlRepositoryConsulta;

const postConsultaService = new PostConsultaService(mysqlRepository)

export const postConsultaController = new PostConsultaController(postConsultaService);
