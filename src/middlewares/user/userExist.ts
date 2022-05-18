import { Request, Response, NextFunction } from 'express';
import { UserService } from "../../services";

export const userNotFound = (request: Request, response: Response, next: NextFunction) => {
    const { id } = request.params;
    const service = new UserService();
    const userExist = service.findOne(parseInt(id));

    if(!userExist) {
        return response.status(404).json({ error: "user not found" })
    }
    
    next();
}