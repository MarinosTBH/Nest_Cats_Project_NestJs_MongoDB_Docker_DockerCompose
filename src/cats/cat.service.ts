//or Provider : responsible for data storage and retrieval, and is designed to be used by the CatsController
//Contains the business logic of the app 
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCatDto } from "./dto/create-cat.dto";
import { UpdateCatDto } from "./dto/update-cat.dto";
import { Cat, CatDocument } from "./schema/cat.schema";


@Injectable()
export class CatsService {
    constructor(
        @InjectModel(Cat.name) private readonly catModel: Model<CatDocument>
    ) {}

    // Post a cat
    async create(createCatDto: CreateCatDto): Promise<CatDocument> {
        const cat = new this.catModel(createCatDto)
        return cat.save()
    }
    // Get all cats
    async findAll(): Promise<CatDocument[]> {
        return this.catModel.find()
    }
    // Find one 
    findOne(id: String) {
        return this.catModel.findById(id)
    }
    // Edit a cat breed
    async update(id: string, updateCatDto: UpdateCatDto): Promise<CatDocument> {
        return this.catModel.findByIdAndUpdate(id, updateCatDto)
    }
    // Remove a cat by its name
    async remove(id: string){
        return this.catModel.findByIdAndRemove(id)
    }
    }

