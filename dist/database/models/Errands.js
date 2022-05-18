"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrandsModels = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let ErrandsModels = class ErrandsModels extends typeorm_1.BaseEntity {
    constructor(title, description, date, userId) {
        super();
        this.title = title;
        this.description = description;
        this.date = date;
        this.userId = userId;
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], ErrandsModels.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ErrandsModels.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ErrandsModels.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ErrandsModels.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "user_id" }),
    __metadata("design:type", Number)
], ErrandsModels.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => User_1.UserModels, user => user.errands),
    (0, typeorm_1.JoinColumn)({ name: "user_id", referencedColumnName: "id" }),
    __metadata("design:type", User_1.UserModels)
], ErrandsModels.prototype, "user", void 0);
ErrandsModels = __decorate([
    (0, typeorm_1.Entity)({ name: "errands" }),
    __metadata("design:paramtypes", [String, String, Date, Number])
], ErrandsModels);
exports.ErrandsModels = ErrandsModels;
