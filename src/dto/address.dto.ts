import { IsNotEmpty, IsString } from "class-validator";

export class CreateAddress{
    @IsNotEmpty()
    @IsString()
    line1: string;

    @IsNotEmpty()
    @IsString()
    pincode: string
}