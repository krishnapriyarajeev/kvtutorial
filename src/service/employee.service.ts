import Address from "../entity/address.entity";
import Employee from "../entity/employee.entity";
import EmployeeRepository from "../repository/employee.repository";

class EmployeeService{
    // private employeeRepository: EmployeeRepository;
    constructor(private employeeRepository: EmployeeRepository){
        
    }

    async getAllEmployees(){
        return this.employeeRepository.find();
    }
    async getEmployeeById(id: number){
        return this.employeeRepository.findOneBy({id});
    }

    async CreateEmployee(email: string, name: string, age: number, address: any){
        const newEmployee = new Employee();
        newEmployee.email = email;
        newEmployee.name = name;
        newEmployee.age=age;
        
        const newAddress = new Address();
        newAddress.line1 = address.line1;
        newAddress.pincode = address.pincode;

        newEmployee.address = newAddress;

        return this.employeeRepository.save(newEmployee);
    }

    async UpdateEmployee(id: number, name:string, email: string, age: number, address: any){
        const employee = await this.employeeRepository.findOneBy({id});
        employee.name = name;
        employee.email = email;
        employee.age=age;
        
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