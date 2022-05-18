import { UserDTO } from "../../dto";
import { UserModels } from "../models"

export class UserRepository {
    async find() {
        const users = await UserModels.find();

        return users;
    }

    async findOne(id: number) {
        const users = await UserModels.findOne(id, { relations: [ "errands" ] });

        return users;
    }

    async login(user: string) {
        const User = await UserModels.findOne(user);

        return User;
    }

    async create(userDTO: UserDTO) {
        const User = await new UserModels(userDTO.user, userDTO.password);
        User.save();

        return User;
    }

    async update(userDTO: UserDTO) {
        const user = await UserModels.findOne(userDTO.id);

        if(user) {
            user.user = userDTO.user;
            await user.save();
        }

        return user;
    }

    async delete(id: number) {
        await UserModels.delete(id);
    }
}