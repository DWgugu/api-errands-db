"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const errands_1 = __importDefault(require("../controllers/errands"));
const middlewares_1 = require("../middlewares");
class ErrandsRoutes {
    init() {
        const routes = (0, express_1.Router)();
        const controller = new errands_1.default();
        routes.post("/errands", middlewares_1.validateToken, controller.store);
        routes.get("/errands", middlewares_1.validateToken, controller.index);
        routes.get("/errands/:id", middlewares_1.validateToken, controller.show);
        routes.delete("/errands/:id", middlewares_1.validateToken, controller.delete);
        routes.put("/errands/:id", middlewares_1.validateToken, controller.update);
        return routes;
    }
}
exports.default = ErrandsRoutes;
