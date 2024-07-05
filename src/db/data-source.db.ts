import "reflect-metadata";
import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import Employee from "../entity/employee.entity";
// import Address from "../entity/address.entity";

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "user",
  password: "password",
  database: "training",
  extra: { max: 5, min: 2 },
  synchronize: false,
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
  entities: ["dist/src/entity/*.js"],
  migrations: ["dist/src/db/migrations/*.js"],
});

export default dataSource;
