import TextField from "./TextField";
import Button from "./Button";
import Options from "./Options";
import { useEffect, useState } from "react";
import obj from "../assets/EmpData";

const Form = (props) =>{

    const roleOptions = [
        {
          id: 1,
          val: "",
          label: "Role",
        },
        {
          id: 2,
          val: "Software Developer",
          label: "Software Developer",
        },
        {
          id: 3,
          val: "Tester",
          label: "Tester",
        },
        {
          id: 4,
          val: "HR",
          label: "HR"
        }
      ];
      
      const statusOptions = [
        {
          id: 1,
          val: "",
          label: "Status",
        },
        {
          id: 2,

          val: "Probation",
          label: "Probation",
        },
        {
          id: 3,
          val: "Active",
          label: "Active",
        },
        {
          id: 4,
          val: "Inactive",
          label: "Inactive",
        },
      ];

      const departmentOptions = [
        {
          id:1,
          val: "",
          label: "Department"
        },
        {
          id:2,
          val: "Software",
          label:"Software"
        },
        {
          id:3,
          val:"Management",
          label:"Management"
        }
      ];
      
      const field = [
        {
          id: 1,
          label: "Employee name",
          placeholder: "Employee name",
          field: "employeename"
        },
        {
          id: 2,
          label: "Joining date",
          placeholder: "Joining date",
          field: "joiningdate"
        },
        {
          id: 3,
          label: "Experience",
          placeholder: "Experience",
          field: "experience"
        },
        {
          id: 4,
          label: "Department",
          name: "Department",
          op: departmentOptions,
          Component: Options,
          field: "department"
        },
        {
          id: 5,
          label: "Role",
          name: "role",
          op: roleOptions,
          Component: Options,
          field: "role"
        }, 
        {
          id: 6,
          label: "Status",
          name: "status",
          op: statusOptions,
          Component: Options,
          field: "status"
        },

        {
          id: 7,
          label: "Address",
          placeholder: "Address",
          field: "address"
        },
        {
            id: 8,
            label: "Employee ID",
            placeholder: "Employee ID",
            field: "employeeid"
        },
      ];
   

    const [employeeState, setEmployeeState] = useState({
        employeename: "",
        employeeid: "",
        role: "",
        status: "",
        joiningdate: "",
        address: "",
        experience: "",
        department: ""
      });
       

      useEffect(() => {
        if (props.id) {
          setEmployeeState(obj.find((item) => item.employeeid == props.id));
        }
      }, []);

      const OnChange = (value, field) =>{
        console.log(value,field);
        setEmployeeState((prevState)=>({
            ...prevState,
            [field]:value,
        }));
      }
      console.log(employeeState);

    return(
        <section className="formflex">
            <form className="form1">
            {field.map((item) => {
                return item.Component ? (
                <item.Component key={item.id} label={item.label} op={item.op} onChange={OnChange} value={employeeState[item.field]} field={item.field}/>
                ) : (
                <TextField key={item.id} label={item.label} value={employeeState[item.field]} field={item.field} placeholder={item.placeholder} onChange={OnChange}/>
                );
            })}
            </form>
            <Button className="button1" text="Create" />
            <Button className="button2" text="Cancel" />
      </section>
    )
}

export default Form;