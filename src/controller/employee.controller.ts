import { plainToInstance } from "class-transformer";
import HttpException from "../exceptions/http.exceptions";
import EmployeeService from "../service/employee.service";
import express, { NextFunction } from "express";
import { validate } from "class-validator";
import { CreateEmployeeDto, UpdateEmployeeDto } from "../dto/employee.dto";
import { CreateAddress } from "../dto/address.dto";
import authorize from "../middleware/authorize.middleware";
import { RequestWithUser } from "../utils/requestWithUser";
import { Role } from "../utils/role.enum";

class EmployeeController {
  // private employeeService: EmployeeService;
  public router: express.Router;

  constructor(private employeeService: EmployeeService) {
    this.router = express.Router();

    this.router.post("/login", this.loginEmployee);

    this.router.get("/", this.getAllEmployees);
    this.router.get("/:id", this.getEmployeesById);

    this.router.post("/", this.CreateEmployee);

    this.router.put("/:id", this.UpdateEmployee);
    this.router.delete("/:id", this.RemoveEmployee);
  }

  // public async getAllEmployees(req: express.Request, res: express.Response){
  //     const employees = await this.employeeService.getAllEmployees();
  //     res.status(200).send(employees);
  // }

  public loginEmployee = async (
    req: express.Request,
    res: express.Response,
    next: NewableFunction
  ) => {
    const { email, password } = req.body;
    try {
      const token = await this.employeeService.loginEmployee(email, password);
      res.status(200).send({ data: token });
    } catch (error) {
      next(error);
    }
  };

  public getAllEmployees = async (
    req: RequestWithUser,
    res: express.Response,
    next: NextFunction
  ) => {
    const employees = await this.employeeService.getAllEmployees();
    console.log(req.role);
    res.status(200).send(employees);
  };

  public getEmployeesById = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const employeeId = Number(req.params.id);
      const employee = await this.employeeService.getEmployeeById(employeeId);

      if (!employee) {
        const error = new HttpException(
          404,
          `No employee found with id: ${req.params.id}`
        );
        throw error;
      }

      res.status(200).send(employee);
    } catch (err) {
      next(err);
    }
  };

  public CreateEmployee = async (
    req: RequestWithUser,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {

      // const role = req.role;
      // if( role !==Role.HR){ // if()
      //   throw new HttpException(403, "You are not authorized to create employee");
      // }

      const employeeData = plainToInstance(CreateEmployeeDto, req.body);
      const errors = await validate(employeeData);


      if (errors.length) {
        console.log(JSON.stringify(errors));
        throw new HttpException(400, JSON.stringify(errors));
      }

      const employee = await this.employeeService.CreateEmployee(
        employeeData.email,
        employeeData.name,
        employeeData.age,
        employeeData.address,
        employeeData.password,
        employeeData.role,
        employeeData.department_id
      );

      res.status(201).send(employee);
    } catch (err) {
      next(err);
    }
  };
  public UpdateEmployee = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const employeeData = plainToInstance(UpdateEmployeeDto, req.body);
      const errors = await validate(employeeData);
      const employeeId = Number(req.params.id);

      if (errors.length) {
        console.log(JSON.stringify(errors));
        throw new HttpException(400, JSON.stringify(errors));
      }
      const employee = await this.employeeService.UpdateEmployee(
        employeeId,
        employeeData.email,
        employeeData.name,
        employeeData.age,
        employeeData.address,
        employeeData.password,
        employeeData.role,
        employeeData.department_id
      );
      res.status(200).send(employee);
    } catch (err) {
      next(err);
    }
  };

  public RemoveEmployee = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const employeeId = Number(req.params.id);

      const employees = await this.employeeService.getEmployeeById(employeeId);

      if (!employees) {
        const error = new HttpException(
          404,
          `No employee found with id: ${req.params.id}`
        );
        throw error;
      }

      const employee = await this.employeeService.RemoveEmployee(employeeId);

      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };
}

export default EmployeeController;
