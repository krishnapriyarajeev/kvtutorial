import { Link } from "react-router-dom";
import EmployeeDetails from "../components/EmployeeDetails";

const EmpList = (props) => {

  return (
    <div className="emplist-wrapper">
      <section className="heading">
        <h1 className="child" id="emplist">Employee List</h1>
        <div className="child"></div>
        <div className="child"></div>
        <div className="child">
            <div className="left">
                Filter By
            </div>
            <select className="status">
                <option value="" disabled selected>Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
        </div>
            <div className="child" id="blue">
                <a href="createemployees" className="left" id="plus">+</a>
                <div className="right">Create Employee</div>
            </div>
        
      </section>

      <div className="blue-heading">
            <div className="emp">Employee Name</div>
            <div className="emp">Employee Id</div>
            <div className="emp">Joining Date</div>
            <div className="emp">Department</div>
            <div className="emp">Role</div>
            <div className="emp">Status</div>
            <div className="emp">Experience</div>
            <div className="emp">Action</div>
      </div >
      {props.state.employees.map((item)=>{
              return <EmployeeDetails key={item.employeeid} content={item} dispatch={props.dispatch}/>
            })
      }
    </div>
  );
};

export default EmpList;
