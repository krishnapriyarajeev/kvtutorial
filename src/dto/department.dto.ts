import { IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator"

export class CreateDepartmentDto{
    @IsNotEmpty()
    @IsString()
    deptName: string

    // @IsNotEmpty()
    // @ValidateNested({each:true})
    // @Type(()=>CreateEmployee)
    // employee: Employee 
}

export class UpdateDepartmentDto{
    @IsOptional()
    @IsString()
    deptName: string

    // @IsNotEmpty()
    // @ValidateNested({each:true})
    // @Type(()=>CreateEmployee)
    // employee: Employee 
}