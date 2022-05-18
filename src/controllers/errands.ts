import { Request, Response } from "express"; 
import { ErrandsService } from "../services";

export default class ErrandsController {
    async store(request: Request, response: Response) {
        const { title, description, date, userId } = request.body;
        
        try {
            const service = new ErrandsService();

            const errands = await service.create({
                title: title,
                description: description,
                date: date,
                userId: userId
            });

            return response.status(201).json(errands);
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async index(request: Request, response: Response) {
        const service = new ErrandsService();

        try {
            const errands = await service.find();

            return response.status(200).json(errands)
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const service = new ErrandsService();

        try {
            const errands = await service.findOne(parseInt(id));

            return response.status(200).json(errands);
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { title, description, date, userId  } = request.body;
        const service = new ErrandsService();

        try {
            const errand = await service.update({
                id: parseInt(id),
                title: title,
                description: description,
                date: date,
                userId: userId
            });
            return response.status(200).json(errand);

        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const service = new ErrandsService();

        try {
            await service.delete(parseInt(id))

            return response.sendStatus(204);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}