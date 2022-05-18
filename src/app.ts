import express , { Request, Response, NextFunction } from "express";
import cors from "cors";
import Database from "./database/connections/database";
import UserRoutes from "./routers/user";
import ErrandsRoutes from "./routers/errands";

export default class Application {
    readonly #express: express.Application;

    constructor() {
        this.#express = express();
    }

    async init() {
        this.config();
        this.routers();
        await this.database();
    }

    dev(portLocal: number) {
        this.#express.listen(portLocal, () => {
            console.log(`Rodando na porta ${portLocal}...`);
        });
    }

    private config() {
        this.#express.use(express.json());
        this.#express.use(express.urlencoded({ extended: false }));
        this.#express.use(cors());
    }

    private middlewares() {
        
    }

    private errors() {

    }

    private routers() {
        const userRoutes = new UserRoutes().init();
        this.#express.use(userRoutes);

        const errandsRoutes = new ErrandsRoutes().init();
        this.#express.use(errandsRoutes);
    }

    private async database() {
        await Database.getInstance();
    }
}