import { plainToInstance } from "class-transformer";
import HttpException from "../exceptions/http.exceptions";
import express, { NextFunction } from "express";
import { validate } from "class-validator";
import { CreateAddress } from "../dto/address.dto";
import authorize from "../middleware/authorize.middleware";
import { RequestWithUser } from "../utils/requestWithUser";
import { Role } from "../utils/role.enum";
import DepartmentService from "../service/department.service";
import { CreateDepartmentDto, UpdateDepartmentDto } from "../dto/department.dto";

class DepartmentController {
  // private employeeService: EmployeeService;
  public router: express.Router;

  constructor(private departmentService: DepartmentService) {
    this.router = express.Router();

    this.router.get("/", this.getAllDepartment);
    this.router.get("/:id", this.getDepartmentById);

    this.router.post("/", this.CreateDepartment);

    this.router.put("/:id", this.UpdateDepartment);
    this.router.delete("/:id", this.RemoveDepartment);
  }

  // public async getAllEmployees(req: express.Request, res: express.Response){
  //     const employees = await this.employeeService.getAllEmployees();
  //     res.status(200).send(employees);
  // }

  public getAllDepartment = async (
    req: RequestWithUser,
    res: express.Response,
    next: NextFunction
  ) => {
    const employees = await this.departmentService.getAllDepartment();
    console.log(req.role);
    res.status(200).send(employees);
  };

  public getDepartmentById = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const deptId = Number(req.params.id);
      const department = await this.departmentService.getDepartmentById(deptId);

      if (!department) {
        const error = new HttpException(
          404,
          `No department found with id: ${req.params.id}`
        );
        throw error;
      }

      res.status(200).send(department);
    } catch (err) {
      next(err);
    }
  };

  public CreateDepartment = async (
    req: RequestWithUser,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {

      // const role = req.role;
      // if( role !==Role.HR){ // if()
      //   throw new HttpException(403, "You are not authorized to create employee");
      // }

      const departmentData = plainToInstance(CreateDepartmentDto, req.body);
      const errors = await validate(departmentData);


      if (errors.length) {
        console.log(JSON.stringify(errors));
        throw new HttpException(400, JSON.stringify(errors));
      }

        const deptName = req.body.deptName;

      const department = await this.departmentService.CreateDepartment(
        deptName
      );

      res.status(201).send(department);
    } catch (err) {
      next(err);
    }
  };
  public UpdateDepartment = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const departmentData = plainToInstance(UpdateDepartmentDto, req.body);
      const errors = await validate(departmentData);
      
      if (errors.length) {
        console.log(JSON.stringify(errors));
        throw new HttpException(400, JSON.stringify(errors));
      }

    const deptName = req.body.deptName;
    const departmentId = Number(req.params.id);

      const department = await this.departmentService.UpdateDepartment(
        departmentId,
        deptName
      );
      res.status(200).send(department);
    } catch (err) {
      next(err);
    }
  };

  public RemoveDepartment= async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const departmentId = Number(req.params.id);

      const departments= await this.departmentService.getDepartmentById(departmentId);

      if (!departments) {
        const error = new HttpException(
          404,
          `No department found with id: ${req.params.id}`
        );
        throw error;
      }

      const department = await this.departmentService.RemoveDepartment(departmentId);

      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };
}

export default DepartmentController;
