import { Request, Response, NextFunction } from 'express';
const authConfig = require("../../config/auth");
const jwt = require("jsonwebtoken");

export const validateToken = (request: Request, response: Response, next: NextFunction) => {
    const token = request.headers["x-access-token"];

    try {
        jwt.verify(token, authConfig.secret)
    } catch (error) {
        return response.status(401).send("invalid token");
    }

    next();
}