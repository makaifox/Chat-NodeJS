import { Router } from "express";
import { SettingsController } from "./Controllers/SettingsController";

const routes = Router();

/**
 * tipos de parametros
 * Routes Params => Parametros de rotas
 * ex: http://localhost:3333/settings/1
 * 
 * Query Params => Filtros e buscas
 * ex: http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body params => {
 * 
 * }
 */

const settingsController = new SettingsController()

routes.post("/settings", settingsController.create);

export { routes };