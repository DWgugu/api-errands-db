"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userNotFound = void 0;
const services_1 = require("../../services");
const userNotFound = (request, response, next) => {
    const { id } = request.params;
    const service = new services_1.UserService();
    const userExist = service.findOne(parseInt(id));
    if (!userExist) {
        return response.status(404).json({ error: "user not found" });
    }
    next();
};
exports.userNotFound = userNotFound;
