"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const authConfig = require("../../config/auth");
const jwt = require("jsonwebtoken");
async function validateToken(req, res, next) {
    const token = req.headers['x-access-token'];
    try {
        jwt.verify(token, authConfig.secret);
    }
    catch (error) {
        return res.status(401).send("token invalid");
    }
    next();
}
exports.validateToken = validateToken;
