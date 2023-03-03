//consumer of service (CatsController)

import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes  } from "@nestjs/common"
import { Cat } from "./interfaces/cat.interface";
import { CatsService } from "./cat.service";
import { CreateCatDto } from './dto/create-cat.dto';
import { ValidationPipe } from "./pipes/validation.pipe";
// import { ValidationPipe } from "@nestjs/common";

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    //create a cat @Post

    

    @Post()
    async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
      console.log(createCatDto);
      this.catsService.create(createCatDto);
      return this.catsService.findAll()
    }

    //fetch the cats resource @Get
    @Get()
    async findAll():Promise<Cat[]> {
      console.log("Cats are here", this.catsService.findAll());
        return this.catsService.findAll()
    }
    //Delete cats
    @Delete(':id')
    async remove(@Param('id') id: string) {
    return this.catsService.remove(id);
  }
    //Edit a cat
    @Put(':id')
    async edit(@Param('id') id: string, @Body(new ValidationPipe()) createCatDto: CreateCatDto) {
      return this.catsService.edit(id)
    
    }
}
