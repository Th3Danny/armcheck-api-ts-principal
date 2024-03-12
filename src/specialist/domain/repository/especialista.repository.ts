import { Especialista } from "../entities/especialista.objet";

export interface EspecialistaRepository {
    create(especialista: Especialista): Promise<Especialista>;
    list(): Promise<Especialista[]>;//borrar despues no es necesario a no ser que tengamos que hacer una vista para nosotros
    findByEmail(correo: string): Promise<Especialista>;
    update(correo : string ,especialista: Especialista): Promise<Especialista>;
    delete(correo: string): Promise<boolean>;
}