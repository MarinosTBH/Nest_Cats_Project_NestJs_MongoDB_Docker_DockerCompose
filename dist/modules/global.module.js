"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const cats_controller_1 = require("./cats/cats.controller");
const users_controller_1 = require("./users/users.controller");
const cat_service_1 = require("./cats/cat.service");
const users_service_1 = require("./users/users.service");
const users_schema_1 = require("./users/schema/users.schema");
const cat_schema_1 = require("./cats/schema/cat.schema");
const auth_module_1 = require("./auth/auth.module");
let GlobalModule = class GlobalModule {
};
GlobalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            mongoose_1.MongooseModule.forFeature([
                { name: cat_schema_1.Cat.name, schema: cat_schema_1.CatSchema },
                { name: users_schema_1.User.name, schema: users_schema_1.UserSchema },
            ])
        ],
        controllers: [cats_controller_1.CatController, users_controller_1.UsersController],
        providers: [cat_service_1.CatService, users_service_1.UsersService],
    })
], GlobalModule);
exports.GlobalModule = GlobalModule;
//# sourceMappingURL=global.module.js.map