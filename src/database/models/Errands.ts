import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { UserModels } from "./User";

@Entity({ name: "errands" })
export class ErrandsModels extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column()
    title?: string;

    @Column()
    description?: string;

    @Column()
    date?: Date;

    @Column({ name: "user_id" })
    userId?: number

    @ManyToOne(type => UserModels, user => user.errands)
    @JoinColumn({ name: "user_id", referencedColumnName: "id" })
    user?: UserModels;

    constructor(title: string, description: string, date: Date, userId: number) {
        super();
        this.title = title;
        this.description = description;
        this.date = date;
        this.userId = userId;
    }

}
