import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUsers1650743080725 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false
                },
                {
                    name: "user",
                    type: "varchar",
                    length: "255",
                    isNullable: false
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "100",
                    isNullable: false
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
