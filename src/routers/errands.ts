import { Router } from "express";
import ErrandsController from "../controllers/errands";
import { validateToken } from "../middlewares";

export default class ErrandsRoutes {
    init() {
        const routes = Router();
        const controller = new ErrandsController();

        routes.post("/errands",validateToken , controller.store);
        routes.get("/errands",validateToken, controller.index);
        routes.get("/errands/:id",validateToken, controller.show);
        routes.delete("/errands/:id",validateToken, controller.delete);
        routes.put("/errands/:id",validateToken, controller.update);

        return routes;
    }
}