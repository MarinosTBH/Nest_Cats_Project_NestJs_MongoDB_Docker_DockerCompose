import { Body, Controller, Get, Post, SetMetadata, UseGuards } from "@nestjs/common";
import { CatService } from "./cat.service";
import { RolesGuard } from "src/guard/roles.guard";
import { Roles } from "src/guard/roles.decorator";
import { Role } from "src/guard/role.enum";
import { Cat } from "./schema/cat.schema";

@Controller('cats')
// @UseGuards(RolesGuard)
export class CatController {
    constructor(private readonly catService: CatService) { }

    @Get()
    async findAll() {
        return this.catService.findAll()
    }

    @Post()
    // @SetMetadata('roles', ['admin'])
    // @Roles(Role.Admin)
    async create(@Body() cat: Cat) {
        return await this.catService.create(cat)
    }
}