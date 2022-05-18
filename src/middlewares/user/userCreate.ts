import { Request, Response, NextFunction } from 'express';
import { UserService } from "../../services";

export const userValidate = (request: Request, response: Response, next: NextFunction) => {
    const { user, password } = request.body;
    const service = new UserService();
    const userExist = service.findOne(user);

    if (user.length < 3 || user.length > 255) {
        return response.status(404).json({ error: "user invalid" })
    }

    if (password.length < 6 || password.length > 30) {
        return response.status(404).json({ error: "password invalid" })
    }

    if(user === userExist) {
        return response.status(404).json({ error: "user exist" })
    }
    
    next();
}