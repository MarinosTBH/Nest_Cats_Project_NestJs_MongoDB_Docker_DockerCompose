import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CatDocument = Cat & Document

@Schema({
    timestamps: {createdAt: 'created', updatedAt: 'updated'}
})
export class Cat {
    @Prop({required : true})
    name: string

    @Prop({required : true})
    description: string
    
    @Prop({required : true})
    price: number
}

export const CatSchema = SchemaFactory.createForClass(Cat)