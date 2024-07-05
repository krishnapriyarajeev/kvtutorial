import { DataSource, Repository } from "typeorm";
import dataSource from "../db/data-source.db";
import Employee from "../entity/employee.entity";

class EmployeeRepository {
  // private dataSource: DataSource;
  constructor(private repository: Repository<Employee>) {
   
  }

  async find(): Promise<Employee[]> {
    // const employeeRepository = this.dataSource.getRepository(Employee);
    return this.repository.find({relations: ["address"]});
  }

  async findOneBy(filter: Partial<Employee>): Promise<Employee | null> {
    // const employeeRepository = this.dataSource.getRepository(Employee);
    return this.repository.findOne({ where: filter, relations: ["address"] });
  }

  async save(emp: Employee): Promise<Employee> {
    // const employeeRepository = this.dataSource.getRepository(Employee);
    return this.repository.save(emp);
  }

  async softDelete(id: number): Promise<void> {
    // const employeeRepository = this.dataSource.getRepository(Employee);
    await this.repository.softDelete(id);
  }
  async softRemove(emp: Employee): Promise<void> {
    // const employeeRepository = this.dataSource.getRepository(Employee);
    await this.repository.softRemove(emp);
  }
}

export default EmployeeRepository;
