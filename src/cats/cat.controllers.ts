//consumer of service 

import { Body, Controller, Delete, Get, Param, Post, Put  } from "@nestjs/common"
import { CatsService } from "./cat.service";
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto)
  }

  @Get()
  async findAll() {
    return !this.catsService ? "No cats": this.catsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
  return this.catsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
      return this.catsService.update(id, updateCatDto)
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(id)
  }
}
