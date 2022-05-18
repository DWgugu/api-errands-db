"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrandsService = void 0;
const repositories_1 = require("../database/repositories");
class ErrandsService {
    async find() {
        const repository = new repositories_1.ErrandsRepository();
        const errands = await repository.find();
        return errands;
    }
    async findOne(id) {
        const repository = new repositories_1.ErrandsRepository();
        const errands = await repository.findOne(id);
        return errands;
    }
    async create(errandsDTO) {
        const repository = new repositories_1.ErrandsRepository();
        const errands = await repository.create(errandsDTO);
        return errands;
    }
    async update(errandsDTO) {
        const repository = new repositories_1.ErrandsRepository();
        const errands = await repository.update(errandsDTO);
        return errands;
    }
    async delete(id) {
        const repository = new repositories_1.ErrandsRepository();
        const errands = await repository.delete(id);
    }
}
exports.ErrandsService = ErrandsService;
