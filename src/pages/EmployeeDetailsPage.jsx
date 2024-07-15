import edit from "../assets/pen.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import obj from "../assets/EmpData";

const EmployeeDetailsPage = () => {
  const { id } = useParams();
  const employee = obj.find((item) => item.employeeid == id);
  console.log(employee);

  if (!employee) return <></>;
  return (
    <div className="emp-details-wrapper">
      <section className="heading">
        <h1>Employee Details</h1>

        <Link to={`../editemployee/${id}`} className="edit-button">
          <img src={edit} />
          <div>Edit</div>
        </Link>
      </section>

      <div className="emp-details-body">
        <div className="emp-details-margin">
          <div className="emp-details-child">
            <div>Employee Name</div>
            <div>{employee?.employeename || ""}</div>
          </div>

          <div className="emp-details-child">
            <div>Joining Date</div>
            <div>{employee.joiningdate}</div>
          </div>

          <div className="emp-details-child">
            <div>Experience</div>
            <div>{employee.experience}</div>
          </div>

          <div className="emp-details-child">
            <div>Role</div>
            <div>{employee.role}</div>
          </div>

          <div className="emp-details-child">
            <div>Status</div>
            <div
              className="colorBox"
              style={
                employee.status == "Active"
                  ? { backgroundColor: "#d3f4be" }
                  : employee.status == "Probation"
                  ? { backgroundColor: "#f5ecb8" }
                  : { backgroundColor: "#ffbfbf" }
              }
            >
              {employee.status}
            </div>
          </div>

          {/* <div className="emp"><div className="colorBox" style={props.content.status=="Active"? {backgroundColor: "#d3f4be"}: props.content.status=="Probation" ? {backgroundColor: "#f5ecb8"}: {backgroundColor: "#ffbfbf"}}>{props.content.status}</div></div> */}

          <div className="emp-details-child">
            <div>Department</div>
            <div>{employee.department}</div>
          </div>

          <div className="emp-details-child1">
            <div>Address</div>
            <div>{employee.address}</div>
          </div>

          <div className="emp-details-child1">
            <div>Employee ID</div>
            <div>{employee.employeeid}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsPage;
