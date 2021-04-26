import { http } from "./http";
import "./websocket/client";

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação especifica
 */

http.listen(3333, () => console.log("Server is running on port 3333"));