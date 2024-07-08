// import EmployeeRepository from "../../src/repository/employee.repository";
// import EmployeeService from "../../src/service/employee.service";
// import Employee from "../../src/entity/employee.entity";
// import { when } from "jest-when";

// describe("Employee Service", () => {
//   let employeeRepository: EmployeeRepository;
//   let employeeService: EmployeeService;

//   beforeAll(() => {
//     const dataSource = {
//       getRepository: jest.fn(),
//     };
//     employeeRepository = new EmployeeRepository(
//       dataSource.getRepository(Employee)
//     ) as jest.Mocked<EmployeeRepository>;
//     employeeService = new EmployeeService(employeeRepository);
//   });

//   it("should return allEmployees", async () => {
//     const mock = jest.fn(employeeRepository.find).mockResolvedValue([]);
//     employeeRepository.find = mock;

//     const users = await employeeService.getAllEmployees();

//     expect(users).toEqual([]);
//     expect(mock).toHaveBeenCalledTimes(1);
//   });

//   it("should return EmployeesbyId", async () => {
//     const mock = jest.fn();
//     when(mock)
//       .calledWith({ id: 1 })
//       .mockResolvedValue({ id: 1, name: "sample" } as Employee);
//     employeeRepository.findOneBy = mock;

//     const users = await employeeService.getEmployeeById(1);

//     expect(users.name).toEqual("sample");
//     expect(mock).toHaveBeenCalledTimes(1);
//   });

//   // it("should create Employee", async () => {
//   //   const mock=jest.fn(employeeRepository.save).mockResolvedValue({email: "sample@gmail.com", name: "sample", age:20, address: {line1: "sample", pincode: "123456"},  } as Employee);
//   //   employeeRepository.save = mock;

//   //   const user = await employeeService.CreateEmployee();
//   // });
// });
