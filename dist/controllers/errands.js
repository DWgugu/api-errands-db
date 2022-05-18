"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class ErrandsController {
    async store(request, response) {
        const { title, description, date, userId } = request.body;
        try {
            const service = new services_1.ErrandsService();
            const errands = await service.create({
                title: title,
                description: description,
                date: date,
                userId: userId
            });
            return response.status(201).json(errands);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async index(request, response) {
        const service = new services_1.ErrandsService();
        try {
            const errands = await service.find();
            return response.status(200).json(errands);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async show(request, response) {
        const { id } = request.params;
        const service = new services_1.ErrandsService();
        try {
            const errands = await service.findOne(parseInt(id));
            return response.status(200).json(errands);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async update(request, response) {
        const { id } = request.params;
        const { title, description, date, userId } = request.body;
        const service = new services_1.ErrandsService();
        try {
            const errand = await service.update({
                id: parseInt(id),
                title: title,
                description: description,
                date: date,
                userId: userId
            });
            return response.status(200).json(errand);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async delete(request, response) {
        const { id } = request.params;
        const service = new services_1.ErrandsService();
        try {
            await service.delete(parseInt(id));
            return response.sendStatus(204);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
}
exports.default = ErrandsController;
