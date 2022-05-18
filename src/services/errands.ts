import { ErrandsRepository } from "../database/repositories";
import { ErrandsDTO } from "../dto";

export class ErrandsService {
    async find() {
        const repository = new ErrandsRepository();
        const errands = await repository.find();

        return errands;
    }

    async findOne(id: number) {
        const repository = new ErrandsRepository();
        const errands = await repository.findOne(id);

        return errands;
    }
    async create(errandsDTO: ErrandsDTO) {
        const repository = new ErrandsRepository();
        const errands = await repository.create(errandsDTO);

        return errands;
    }

    async update(errandsDTO: ErrandsDTO) {
        const repository = new ErrandsRepository();
        const errands = await repository.update(errandsDTO);

        return errands;
    }

    async delete(id: number) {
        const repository = new ErrandsRepository();
        const errands =  await repository.delete(id);
    }        
}