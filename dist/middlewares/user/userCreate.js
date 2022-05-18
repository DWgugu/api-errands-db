"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidate = void 0;
const services_1 = require("../../services");
const userValidate = (request, response, next) => {
    const { user, password } = request.body;
    const service = new services_1.UserService();
    const userExist = service.findOne(user);
    if (user.length < 3 || user.length > 255) {
        return response.status(404).json({ error: "user invalid" });
    }
    if (password.length < 6 || password.length > 30) {
        return response.status(404).json({ error: "password invalid" });
    }
    if (user === userExist) {
        return response.status(404).json({ error: "user exist" });
    }
    next();
};
exports.userValidate = userValidate;
