import Address from "../entity/address.entity";
import Employee from "../entity/employee.entity";
import HttpException from "../exceptions/http.exceptions";
import EmployeeRepository from "../repository/employee.repository";
import { JWT_SECRET, JWT_VALIDITY } from "../utils/constants";
import { Role } from "../utils/role.enum";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import {jwtPayload} from "../utils/jwtPayload";
import Department from "../entity/department.entity";

class EmployeeService{
    // private employeeRepository: EmployeeRepository;
    constructor(private employeeRepository: EmployeeRepository){
        
    }

    async loginEmployee(email: string, password: string){
        const employee = await this.employeeRepository.findOneBy({email});

        if(!employee){
            throw new HttpException(401, "EMPLOYEE NOT FOUND");
        }

        const result = await bcrypt.compare(password, employee.password);

        if(!result){
            throw new HttpException(401, "INVALID CREDENTIALS")
        }

        const payload: jwtPayload = {
            name: employee.name,
            email: employee.email,
            role: employee.role
        };

        const token= jsonwebtoken.sign(payload, JWT_SECRET,{ expiresIn: JWT_VALIDITY});
        return {token};

    }

    async getAllEmployees(){
        return this.employeeRepository.find();
    }
    async getEmployeeById(id: number){
        return this.employeeRepository.findOneBy({id});
    }

    async CreateEmployee(email: string, name: string, age: number, address: any, password: string, role: Role, deptId: number){
        const newEmployee = new Employee();
        newEmployee.email = email;
        newEmployee.name = name;
        newEmployee.age=age;
        newEmployee.password = password ? await bcrypt.hash(password, 10): "";
        newEmployee.role = role;

        // const department = new Department()
        // department.id = ""
        newEmployee.department_id = deptId;
        
        const newAddress = new Address();
        newAddress.line1 = address.line1;
        newAddress.pincode = address.pincode;

        newEmployee.address = newAddress;

        return this.employeeRepository.save(newEmployee);
    }

    async UpdateEmployee(id: number, name:string, email: string, age: number, address: any, password: string, role: Role, deptId: number){
        const employee = await this.employeeRepository.findOneBy({id});

        employee.name = name;
        employee.email = email;
        employee.age=age;
        employee.password=password;
        employee.role=role;
        employee.department_id=deptId;
        
        const newAddress = new Address();
        newAddress.line1 = address.line1;
        newAddress.pincode = address.pincode;

        employee.address = newAddress;
        return this.employeeRepository.save(employee);
    }

    async RemoveEmployee(id: number) {
        const employee = await this.employeeRepository.findOneBy({id});
        return this.employeeRepository.softRemove(employee);
    }

}

export default EmployeeService; 