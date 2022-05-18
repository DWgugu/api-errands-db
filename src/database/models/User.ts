import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { ErrandsModels } from "./Errands";

@Entity({ name: "users" })
export class UserModels extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column()
    user?: string;

    @Column()
    password?: string;

    @OneToMany(type => ErrandsModels, errands => errands.user)
    errands?: ErrandsModels[];

    constructor(user: string, password: string) {
        super();
        this.user = user;
        this.password = password;
    }
}