import { Router } from "express";
import { MessagesController } from "./Controllers/MessagesController";
import { SettingsController } from "./Controllers/SettingsController";
import { UsersController } from "./Controllers/UsersController";

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

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser)

export { routes };