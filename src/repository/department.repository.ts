import { DataSource, Repository } from "typeorm";
import Department from "../entity/department.entity";

class DepartmentRepository {
  static findByOne: any;
  // private dataSource: DataSource;
  constructor(private repository: Repository<Department>) {}

  async find(): Promise<Department[]> {
    // const employeeRepositoEmployeery = this.dataSource.getRepository(Employee);
    return this.repository.find();
  }

  async findOneBy(filter: Partial<Department>): Promise<Department | null> {
    // const employeeRepository = this.dataSource.getRepository(Employee);
    return this.repository.findOne({ where: filter, relations: ["employee"] });
  }

  async save(dept: Department): Promise<Department> {
    // const employeeRepository = this.dataSource.getRepository(Employee);
    return this.repository.save(dept);
  }

  //   async softDelete(id: number): Promise<void> {
  //     // const employeeRepository = this.dataSource.getRepository(Employee);
  //     await this.repository.softDelete(id);
  //   }
  async softRemove(dept: Department): Promise<void> {
    // const employeeRepository = this.dataSource.getRepository(Employee);
    await this.repository.softRemove(dept);
  }
}

export default DepartmentRepository;
