import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { IsString, Length } from "class-validator";
import { Document } from "mongoose";
import { Role } from "src/guard/role.enum";

export type UserDocument = User & Document

@Schema({
    timestamps: { createdAt: 'created', updatedAt: 'updated' }
})
export class User {
    @Prop()
    @IsString()
    @Length(3,10)
    name: string

    @Prop({ required: true })
    @IsString()
    @Length(3,10)
    password: string

    @Prop({ required: true })
    role: Role[]
}

export const UserSchema = SchemaFactory.createForClass(User)