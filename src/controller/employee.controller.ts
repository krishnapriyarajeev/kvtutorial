import { plainToInstance } from "class-transformer";
import HttpException from "../exceptions/http.exceptions";
import EmployeeService from "../service/employee.service";
import express from "express";
import { validate } from "class-validator";
import { CreateEmployee } from "../dto/employee.dto";
import { CreateAddress } from "../dto/address.dto";

class EmployeeController {
  // private employeeService: EmployeeService;
  public router: express.Router;

    constructor(private employeeService: EmployeeService) {
    this.router = express.Router();

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

  public getAllEmployees = async (
    req: express.Request,
    res: express.Response
  ) => {
    const employees = await this.employeeService.getAllEmployees();
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
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {

      const employeeData = plainToInstance(CreateEmployee, req.body);
      const errors = await validate(employeeData)

      if(errors.length){
        console.log(JSON.stringify(errors));
        throw new HttpException(400, JSON.stringify(errors));
      }
    
      const employee = await this.employeeService.CreateEmployee(
        employeeData.email,
        employeeData.name,
        employeeData.age,
        employeeData.address
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

    try{

      const employeeData = plainToInstance(CreateEmployee, req.body);
      const errors = await validate(employeeData)
      const employeeId = Number(req.params.id);
      // const name = req.body.name;
      // const email = req.body.email;
      // const age = req.body.age;
      // const address = req.body.address;

      if(errors.length){
        console.log(JSON.stringify(errors));
        throw new HttpException(400, JSON.stringify(errors));
      }
      const employee = await this.employeeService.UpdateEmployee(
        employeeId,
        employeeData.email,
        employeeData.name,
        employeeData.age,
        employeeData.address
      );
      res.status(200).send(employee);

    }catch (err) {
      next(err);
    }
   
  };

  public RemoveEmployee = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const employeeId = Number(req.params.id);
    
    const employee = await this.employeeService.RemoveEmployee(employeeId);
    res.status(204).send();
  };
}

export default EmployeeController;
