"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const models_1 = require("../database/models");
const services_1 = require("../services");
const bcrypt = require("bcrypt");
const authConfig = require("../../config/auth");
const jwt = require("jsonwebtoken");
class UserController {
    async store(request, response) {
        const { user } = request.body;
        try {
            const hashedPassword = await bcrypt.hash(request.body.password, 10);
            const service = new services_1.UserService();
            const User = await service.create({
                user: user,
                password: hashedPassword
            });
            return response.status(201).json(User);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async index(request, response) {
        const service = new services_1.UserService();
        try {
            const User = await service.find();
            return response.status(200).json(User);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async show(request, response) {
        const { id } = request.params;
        const service = new services_1.UserService();
        try {
            const User = await service.findOne(parseInt(id));
            if (!User) {
                return response.status(400).json({ message: "user not found" });
            }
            return response.status(200).json(User);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    /*async update(request: Request, response: Response) {
        const { id } = request.params;
        const { user } = request.body;
        const service = new UserService();

        try {
            const User = await service.update({
                id: parseInt(id),
                user,
            });


        } catch (error) {
            return response.status(500).json(error);
        }
    }*/
    async delete(request, response) {
        const { id } = request.params;
        const service = new services_1.UserService();
        try {
            const user = await service.findOne(parseInt(id));
            if (!user) {
                return response.status(400).json({ message: "user not found" });
            }
            else {
                await service.delete(parseInt(id));
                return response.sendStatus(204);
            }
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async login(request, response) {
        const { user, password } = request.body;
        const service = new services_1.UserService();
        try {
            const userExist = await (0, typeorm_1.getRepository)(models_1.UserModels).findOne({ user: user });
            if (!userExist) {
                return response.status(404).json({ msg: "user invalid" });
            }
            if (!await bcrypt.compare(password, userExist.password)) {
                return response.status(404).json({ msg: "user or password invalid" });
            }
            const token = jwt.sign({ id: userExist.id }, authConfig.secret, {
                expiresIn: "1h",
            });
            return response.status(200).json({
                userAuthenticate: {
                    id: userExist.id,
                    user: userExist.user,
                    token: token
                }
            });
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
}
exports.default = UserController;
