import { MysqlEspecialistaRepository } from "./DB/mysql.repository";
import { CrearEspecialistaController, ListSpecialistController, UpdateSpecialistController, DeletedSpecialistController, GetByCorreoSpecialistController } from "./controller/index.controller"
import { GetAllSpecialistService,UpdateSpecialistService,DeletedSpecialistService,CrearEspecialistaService,GetByCorreoSpecialisService} from "../application/service/index.service";

const mysqlEspecialistaRepository = new MysqlEspecialistaRepository();

const getAllSpecialistService = new GetAllSpecialistService(mysqlEspecialistaRepository);
const updateSpecialistService = new UpdateSpecialistService(mysqlEspecialistaRepository);
const deletedSpecialistService = new DeletedSpecialistService(mysqlEspecialistaRepository);
const crearEspecialistaService = new CrearEspecialistaService(mysqlEspecialistaRepository);
const getByCorreoSpecialisService = new GetByCorreoSpecialisService(mysqlEspecialistaRepository);

export const getAllSpecialistController = new ListSpecialistController(getAllSpecialistService);
export const updateSpecialistController = new UpdateSpecialistController(updateSpecialistService);
export const deletedSpecialistController = new DeletedSpecialistController(deletedSpecialistService);
export const crearEspecialistaController = new CrearEspecialistaController(crearEspecialistaService);
export const getByCorreoSpecialistController = new GetByCorreoSpecialistController(getByCorreoSpecialisService);
