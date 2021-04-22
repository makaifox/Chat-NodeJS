import { Request, Response } from "express"
import { UserService } from "../services/UserService"

class UsersController {

  async create(request: Request, response: Response) {
    const usersService = new UserService();
  }

}

export { UsersController }