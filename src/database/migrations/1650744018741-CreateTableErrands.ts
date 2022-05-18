import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTableErrands1650744018741 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "errands",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isGenerated: true,
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: "title",
                    type: "varchar",
                    length: "255",
                    isNullable: true
                },
                {
                    name: "description",
                    type: "varchar",
                    length: "255",
                    isNullable: true
                },
                {
                    name: "date",
                    type: "date",
                    isNullable: true
                },
                {
                    name: "user_id",
                    type: "int",
                    isNullable: false
                }
            ],
            foreignKeys: [
                new TableForeignKey({
                    referencedColumnNames: ["id"],
                    referencedTableName: "users",
                    columnNames: ["user_id"]
                })
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("errands");
    }

}
