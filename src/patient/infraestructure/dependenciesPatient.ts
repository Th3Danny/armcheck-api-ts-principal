import { MySQlRepositoryPaciente } from "./DB/mysqlRepository";
import { GetPacienteService } from "../application/service/getPatientService";
import { GetPacienteController } from "./controllers/getPatientcontroller";
import { GetPacienteByIdservice } from "../application/service/getPatientByIdService";
import { GetPacienteByIdController } from "./controllers/getPatientByIdController";
import { CrearPacienteService } from "../application/service/createPatientService";
import { CreatePacienteController } from "./controllers/createPatientController";
import { ActualizarPacienteService } from "../application/service/updatePatientService";
import { UpdatePacienteController } from "./controllers/updatePatientController";
import { DeletePacienteByIdService } from "../application/service/deletePatientService";
import { DeletePacienteByIdController } from "./controllers/deletePatientController";

const mysqlRepository = new MySQlRepositoryPaciente;

const getPacienteService = new GetPacienteService(mysqlRepository);
const getPacienteByIdService = new GetPacienteByIdservice(mysqlRepository)
const crearPacienteService = new CrearPacienteService(mysqlRepository)
const updatePacienteService = new ActualizarPacienteService(mysqlRepository)
const deletePacienteById = new DeletePacienteByIdService(mysqlRepository)

export const getPacienteController = new GetPacienteController(getPacienteService);
export const getPatientByIdController = new GetPacienteByIdController(getPacienteByIdService);
export const crearPacienteController = new CreatePacienteController(crearPacienteService);
export const updatePacienteController = new UpdatePacienteController(updatePacienteService);
export const deletePacienteController = new DeletePacienteByIdController(deletePacienteById);