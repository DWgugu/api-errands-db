"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const models_1 = require("../models");
class UserRepository {
    async find() {
        const users = await models_1.UserModels.find();
        return users;
    }
    async findOne(id) {
        const users = await models_1.UserModels.findOne(id, { relations: ["errands"] });
        return users;
    }
    async login(user) {
        const User = await models_1.UserModels.findOne(user);
        return User;
    }
    async create(userDTO) {
        const User = await new models_1.UserModels(userDTO.user, userDTO.password);
        User.save();
        return User;
    }
    async update(userDTO) {
        const user = await models_1.UserModels.findOne(userDTO.id);
        if (user) {
            user.user = userDTO.user;
            await user.save();
        }
        return user;
    }
    async delete(id) {
        await models_1.UserModels.delete(id);
    }
}
exports.UserRepository = UserRepository;
