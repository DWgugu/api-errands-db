import { ErrandsDTO } from "../../dto";
import { ErrandsModels } from "../models"

export class ErrandsRepository {
    async find() {
        const errands = await ErrandsModels.find();

        return errands;
    }

    async findOne(id: number) {
        const errands = await ErrandsModels.findOne(id);

        return errands;
    }

    async create(errandsDTO: ErrandsDTO) {
        const errands = await new ErrandsModels(errandsDTO.title, errandsDTO.description, errandsDTO.date, errandsDTO.userId);
        errands.save();

        return errands;
    }

    async update(errandsDTO: ErrandsDTO) {
        const errands = await ErrandsModels.findOne(errandsDTO.id);

        if(errands) {
            errands.title = errandsDTO.title;
            errands.description = errandsDTO.description;
            errands.date = errandsDTO.date;
            await errands.save();
        }

        return errands;
    }

    async delete(id: number) {
        await ErrandsModels.delete(id);
    }
}