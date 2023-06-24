import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cat, CatDocument } from "./schema/cat.schema";


@Injectable()
export class CatService {
    constructor(
        @InjectModel(Cat.name) private readonly catModel: Model<CatDocument>
    ) {}

    // Post a cat
    async create(cat: Cat): Promise<CatDocument> {
        return this.catModel.create(cat)
        
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
    async update(id: string, cat: Cat): Promise<CatDocument> {
        return this.catModel.findByIdAndUpdate(id, cat)
    }
    // Remove a cat by its name
    async remove(id: string){
        return this.catModel.findByIdAndRemove(id)
    }
    }

