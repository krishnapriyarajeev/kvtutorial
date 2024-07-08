import { plainToInstance } from "class-transformer";
import HttpException from "../exceptions/http.exceptions";
import express, { NextFunction } from "express";
import { validate } from "class-validator";
import { CreateAddress } from "../dto/address.dto";
import authorize from "../middleware/authorize.middleware";
import { RequestWithUser } from "../utils/requestWithUser";
import { Role } from "../utils/role.enum";
import DepartmentService from "../service/department.service";
import {
  CreateDepartmentDto,
  UpdateDepartmentDto,
} from "../dto/department.dto";


class DepartmentController {
  public router: express.Router;

  constructor(private departmentService: DepartmentService) {
    this.router = express.Router();

    this.router.get("/", authorize, this.getAllDepartment);
    this.router.get("/:id", authorize, this.getDepartmentById);

    this.router.post("/", authorize, this.CreateDepartment);

    this.router.put("/:id", authorize, this.UpdateDepartment);
    this.router.delete("/:id", authorize, this.RemoveDepartment);
  }

  public getAllDepartment = async (
    req: RequestWithUser,
    res: express.Response,
    next: NextFunction
  ) => {
    const role = req.role;
    if (role !== Role.HR) {
      throw new HttpException(
        403,
        "You are not authorized to view all departments"
      );
    }

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
      const role = req.role;
      if (role !== Role.HR) {
        throw new HttpException(
          403,
          "You are not authorized to create department"
        );
      }

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
    req: RequestWithUser,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const role = req.role;
      if (role !== Role.HR) {
        throw new HttpException(
          403,
          "You are not authorized to update department"
        );
      }

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

  public RemoveDepartment = async (
    req: RequestWithUser,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const role = req.role;
      if (role !== Role.HR) {
        throw new HttpException(
          403,
          "You are not authorized to remove department"
        );
      }

      const departmentId = Number(req.params.id);

      const departments = await this.departmentService.getDepartmentById(
        departmentId
      );

      if (!departments) {
        const error = new HttpException(
          404,
          `No department found with id: ${req.params.id}`
        );
        throw error;
      }

      console.log(departments.employee.length + "number of employees present in "+ departments.id);

      if (departments.employee.length != 0) {
        throw new HttpException(404, "Department Not Empty, Cannot Delete.");
      }

      const department = await this.departmentService.RemoveDepartment(
        departmentId
      );

      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };
}

export default DepartmentController;
