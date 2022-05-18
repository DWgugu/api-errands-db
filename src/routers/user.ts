import { Router } from "express";
import UserController from "../controllers/user";
import { validateToken } from "../middlewares";
import { userValidate, userNotFound } from "../middlewares/user";

export default class UserRoutes {
    init() {
        const routes = Router();
        const controller = new UserController();

        routes.post("/login", controller.login);
        routes.post("/user",[ validateToken, userValidate ], controller.store);
        routes.get("/user", controller.index);
        routes.get("/user/:id",validateToken, controller.show);
        routes.delete("/user/:id",validateToken, controller.delete);

        return routes;
    }
}