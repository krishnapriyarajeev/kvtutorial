import Address from "../entity/address.entity";
import Employee from "../entity/employee.entity";
import HttpException from "../exceptions/http.exceptions";
import DepartmentRepository from "../repository/department.repository";
import { JWT_SECRET, JWT_VALIDITY } from "../utils/constants";
import { Role } from "../utils/role.enum";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import {jwtPayload} from "../utils/jwtPayload";
import Department from "../entity/department.entity";

class DepartmentService{
    // private employeeRepository: EmployeeRepository;
    constructor(private departmentRepository: DepartmentRepository){
        
    }

    async getAllDepartment(){
        return this.departmentRepository.find();
    }
    async getDepartmentById(id: number){
        return this.departmentRepository.findOneBy({id});
    }

    async CreateDepartment(deptName: string){
        
        const newDepartment = new Department();
        newDepartment.deptName = deptName;

        // newEmployee.address = newAddress;

        return this.departmentRepository.save(newDepartment);
    }

    async UpdateDepartment(id: number, name:string){
        const department = await this.departmentRepository.findOneBy({id});
        department.deptName = name;

        return this.departmentRepository.save(department);
    }

    async RemoveDepartment(id: number) {
        const employee = await this.departmentRepository.findOneBy({id});
        return this.departmentRepository.softRemove(employee);
    }

}

export default DepartmentService; 