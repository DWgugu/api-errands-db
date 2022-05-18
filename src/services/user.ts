import { UserRepository } from "../database/repositories";
import { UserDTO } from "../dto";

export class UserService {
    async find() {
        const repository = new UserRepository();
        const user = await repository.find();

        return user;
    }

    async findOne(id: number) {
        const repository = new UserRepository();
        const user = await repository.findOne(id);

        return user;
    }

    async login(user: UserDTO) {
        const repository = new UserRepository();
        const User = await repository.login(user.user);

        return User;
    }

    async create(userDTO: UserDTO) {
        const repository = new UserRepository();
        const User = await repository.create(userDTO);

        return User;
    }

    async update(userDTO: UserDTO) {
        const repository = new UserRepository();
        const user = await repository.update(userDTO);

        return user;
    }

    async delete(id: number) {
        const repository = new UserRepository();
        const user =  await repository.delete(id);
    }        
}