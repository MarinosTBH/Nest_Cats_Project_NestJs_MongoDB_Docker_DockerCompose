import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { IsNotEmpty, IsString, MinLength, MaxLength, IsNumber } from "class-validator";
import { Document } from "mongoose";

export type CatDocument = Cat & Document

@Schema({
    timestamps: {createdAt: 'created', updatedAt: 'updated'}
})
export class Cat {
    @Prop()
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    name: string;

    @Prop()
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(300)
    description: string;

    @Prop()
    @IsNumber()
    @IsNotEmpty()
    price: number;

    @Prop()
    @IsString()
    breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat)