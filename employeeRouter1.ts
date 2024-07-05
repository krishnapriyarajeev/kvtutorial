// import express from "express";
// import boyparse from "body-parser";

// import Employee from "./src/entity/employee.entity";
// import dataSource from "./src/db/data-source.db";

// let count = 2;

// const employeeRouter = express.Router();

// // const emp: Employee[] = [
// //   {
// //     id: 1,
// //     email: "kp@gmail.com",
// //     name: "kp",
// //     createdAt: new Date(),
// //     updatedAt: new Date(),
// //     deletedAt: new Date()
// //   },
// //   {
// //     id: 2,
// //     email: "sneha@gmail.com",
// //     name: "sneha",
// //     createdAt: new Date(),
// //     updatedAt: new Date(),
// //     deletedAt: new Date()
// //   },
// //   {
// //     id: 3,
// //     email: "neeru@gmail.com",
// //     name: "neeru",
// //     createdAt: new Date(),
// //     updatedAt: new Date(),
// //     deletedAt: new Date()
// //   },
// // ];

// // employeeRouter.get("/", (req, res) => {
// //   // console.log(req.url);
// //   res.status(200).send(emp);
// // });

// // employeeRouter.get("/:employeeId", (req, res) => {
// //   //google and check
// //   // console.log(req.params["employeeId"]);
// //   const employee = emp.find(
// //     (record) => record.id == Number(req.params.employeeId)
// //   );
// //   res.status(200).send(employee);
// // });

// // employeeRouter.post("/", (req, res) => {
// //   // console.log(req.body);
// //   count=count+1;
// //   const employee = new Employee;
// //   employee.id = count;
// //   employee.name = req.body.name;
// //   employee.email = req.body.email;
// //   employee.createdAt = new Date();
// //   employee.updatedAt = new Date();
// //   emp.push(employee);
// //   res.status(201).send("post emp");
// // });

// // employeeRouter.put("/:id", (req, res) => {
// //   // console.log(req.url);
// //   const employee = emp.find((record) => record.id == Number(req.params.id));

// //   employee.name = req.body.name;
// //   employee.email = req.body.email;

// //   res.status(200).send("Update emp");
// // });

// // // employeeRouter.patch("/:id", (req, res)=>{
// // //   // console.log(req.url);

// // // });

// // employeeRouter.delete("/:id", (req, res) => {
// //   console.log(req.url);
// //   const index = emp.findIndex((record) => record.id == Number(req.params.id));
// //   emp.splice(index, 1);
// //   res.status(204).send(""); // 204- no content
// // });

// employeeRouter.get("/", async (req, res) => {
//   const employeeRepository = dataSource.getRepository(Employee);
//   const employees = await employeeRepository.find();
//   res.status(200).send(employees);
// });

// employeeRouter.post("/", async (req, res) => {
//   const employeeRepository = dataSource.getRepository(Employee);
//   const newEmployee = new Employee();
//   newEmployee.email = req.body.email;
//   newEmployee.name = req.body.name;
//   const savedEmployee = await employeeRepository.save(newEmployee);
//   res.status(200).send(savedEmployee);
// });

// employeeRouter.get("/:empid", async (req, res) => {
//   const employeeRepository = dataSource.getRepository(Employee);
//   const employees = await employeeRepository.findOneBy({
//     id: Number(req.params.empid),
//   });
//   res.status(200).send(employees);
// });

// employeeRouter.put("/:id", async (req, res) => {
//   const employeeRepository = dataSource.getRepository(Employee);
//   const employee = await employeeRepository.findOneBy({ id: Number(req.params.id) });
//   employee.email = req.body.email;
//   employee.name = req.body.name;
//   const updatedEmployee = await employeeRepository.save(employee);
//   res.status(200).send(updatedEmployee);
// });


// employeeRouter.delete("/:id", async (req, res) => {
//   const employeeRepository = dataSource.getRepository(Employee);
//   const result = await employeeRepository.softDelete(Number(req.params.id))
//   res.status(200).send(result);
// });


// export default employeeRouter; //default is given coz
