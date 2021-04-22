import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"


class UserService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository)
    //Verificar se usuario existe

    const userExists = await usersRepository.findOne({
      email
    })

    //se existir, retornar user
    if (userExists) {
      return userExists;
    }

    const user = usersRepository.create({
      email
    });

    await usersRepository.save(user);
    //Se não existir, salvar no DB
    return user;

  }
}

export { UserService };