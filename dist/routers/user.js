"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("../controllers/user"));
const middlewares_1 = require("../middlewares");
const user_2 = require("../middlewares/user");
class UserRoutes {
    init() {
        const routes = (0, express_1.Router)();
        const controller = new user_1.default();
        routes.post("/login", controller.login);
        routes.post("/user", [middlewares_1.validateToken, user_2.userValidate], controller.store);
        routes.get("/user", middlewares_1.validateToken, controller.index);
        routes.get("/user/:id", middlewares_1.validateToken, controller.show);
        routes.delete("/user/:id", middlewares_1.validateToken, controller.delete);
        return routes;
    }
}
exports.default = UserRoutes;
