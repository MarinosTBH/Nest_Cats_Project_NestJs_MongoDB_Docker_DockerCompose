import { IsString, IsNumber, IsNotEmpty, MinLength, MaxLength } from "class-validator";

export class CreateCatDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(300)
    description: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;
    
    // created: Date;
    // updated: Date;
}