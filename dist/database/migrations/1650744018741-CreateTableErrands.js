"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableErrands1650744018741 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableErrands1650744018741 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
                new typeorm_1.TableForeignKey({
                    referencedColumnNames: ["id"],
                    referencedTableName: "users",
                    columnNames: ["user_id"]
                })
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("errands");
    }
}
exports.CreateTableErrands1650744018741 = CreateTableErrands1650744018741;
