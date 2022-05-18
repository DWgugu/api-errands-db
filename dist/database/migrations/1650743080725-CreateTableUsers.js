"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUsers1650743080725 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableUsers1650743080725 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }
}
exports.CreateTableUsers1650743080725 = CreateTableUsers1650743080725;
