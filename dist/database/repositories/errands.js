"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrandsRepository = void 0;
const models_1 = require("../models");
class ErrandsRepository {
    async find() {
        const errands = await models_1.ErrandsModels.find();
        return errands;
    }
    async findOne(id) {
        const errands = await models_1.ErrandsModels.findOne(id);
        return errands;
    }
    async create(errandsDTO) {
        const errands = await new models_1.ErrandsModels(errandsDTO.title, errandsDTO.description, errandsDTO.date, errandsDTO.userId);
        errands.save();
        return errands;
    }
    async update(errandsDTO) {
        const errands = await models_1.ErrandsModels.findOne(errandsDTO.id);
        if (errands) {
            errands.title = errandsDTO.title;
            errands.description = errandsDTO.description;
            errands.date = errandsDTO.date;
            await errands.save();
        }
        return errands;
    }
    async delete(id) {
        await models_1.ErrandsModels.delete(id);
    }
}
exports.ErrandsRepository = ErrandsRepository;
