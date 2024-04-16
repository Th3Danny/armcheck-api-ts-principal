import { MysqlEspecialistaRepository } from "../../specialist/infraestructure/DB/mysql.repository";
import { LoginAuthService, RegisterAuthService } from "../aplication/service";
import { LoginAuthController } from "./controllers/loginAuth.controller";
import { RegisterAuthController } from "./controllers/registerAuth.controller";

const mysqlRepository = new MysqlEspecialistaRepository();

const loginAuthService = new LoginAuthService(mysqlRepository);
const registerAuthService = new RegisterAuthService(mysqlRepository)

export const loginAuthController = new LoginAuthController(loginAuthService)
export const registerAuthController = new RegisterAuthController(registerAuthService)