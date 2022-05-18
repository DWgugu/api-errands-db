"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const authConfig = require("../../config/auth");
const jwt = require("jsonwebtoken");
const validateToken = (request, response, next) => {
    const token = request.headers["x-access-token"];
    try {
        jwt.verify(token, authConfig.secret);
    }
    catch (error) {
        return response.status(401).send("invalid token");
    }
    next();
};
exports.validateToken = validateToken;
