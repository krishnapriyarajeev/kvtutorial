import {
  CreateDateColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import AbstractEntity from "./abstract.entity";
import Address from "./address.entity";
import { Role } from "../utils/role.enum";
import Department from "./department.entity";

@Entity()
class Employee extends AbstractEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @OneToOne(() => Address, (address) => address.employee, {
    cascade: true,
    onDelete: "CASCADE",
  })
  address: Address;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  role: Role;

  @ManyToOne(() => Department, (department) => department.employee)
  @JoinColumn()
  department: Department;

  @Column()
  department_id: number;
}

export default Employee;
