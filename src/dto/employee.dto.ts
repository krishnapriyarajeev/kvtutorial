import { IsEmail, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator"
import Address from "../entity/address.entity"
import { Type } from "class-transformer"
import { CreateAddress } from "./address.dto"

export class CreateEmployee{
    @IsNotEmpty()
    @IsString()
    name: string

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string

    @IsNotEmpty()
    @IsNumber()
    age: number

    @IsNotEmpty()
    @ValidateNested({each:true})
    @Type(()=>CreateAddress)
    address: Address
}