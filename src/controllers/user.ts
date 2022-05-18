import { Request, Response } from "express"; 
import { getRepository } from "typeorm";
import { UserModels } from "../database/models";
import { UserService } from "../services";
const bcrypt = require("bcrypt");
const authConfig = require("../../config/auth");
const jwt = require("jsonwebtoken");

export default class UserController {
    async store(request: Request, response: Response) {
        const { user } = request.body;
        
        try {
            const hashedPassword = await bcrypt.hash(request.body.password, 10);
            const service = new UserService();

            const User = await service.create({
                user: user,
                password: hashedPassword
            });

            return response.status(201).json(User);
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async index(request: Request, response: Response) {
        const service = new UserService();

        try {
            const User = await service.find();

            return response.status(200).json(User)
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const service = new UserService();

        try {
            const User = await service.findOne(parseInt(id));
            if(!User) {
                return response.status(400).json({ message: "user not found" });
            }
            
            return response.status(200).json(User);
        } catch (error) {
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

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const service = new UserService();

        try {
            const user = await service.findOne(parseInt(id));
            if(!user) {
                return response.status(400).json({ message: "user not found" });
            } else {
               await service.delete(parseInt(id));
               return response.sendStatus(204); 
            }

            
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async login(request: Request, response: Response) {
        const { user, password } = request.body;
        const service = new UserService();

        try {
            const userExist = await getRepository(UserModels).findOne({ user: user })
            
            if(!userExist) {
                return response.status(404).json({msg: "user invalid" });
            }

            if(!await bcrypt.compare(password, userExist.password)) {
                return response.status(404).json({ msg: "user or password invalid" });
            }

            const token = jwt.sign({ id: userExist.id }, authConfig.secret, {
                expiresIn: "1h",
            })

            return response.status(200).json({
                userAuthenticate: {
                    id: userExist.id,
                    user: userExist.user,
                    token: token
                }
            });
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}