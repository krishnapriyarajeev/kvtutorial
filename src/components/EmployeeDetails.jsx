import { Link, useNavigate } from "react-router-dom";
import edit from "../assets/pen.png";
import { useState } from "react";
import DeletePopup from "./DeletePopup";

const EmployeeDetails = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`../employeedetails/${props.content.employeeid}`);
  };
  const handleEditClick = (e) => {
    e.stopPropagation();
    console.log("Clicked");
    navigate(`../editemployee/${props.content.employeeid}`);
  };
  // const handleDelete = (e) => {
  //   e.stopPropagation();
  //   console.log("clicked");
  //   setDeleteState(true);
  // };

  return (
    <div className="data-div" onClick={handleClick}>
      <div className="emp">{props.content.employeename}</div>
      <div className="emp">{props.content.employeeid}</div>
      <div className="emp">{props.content.joiningdate}</div>
      <div className="emp">{props.content.department}</div>
      <div className="emp">{props.content.role}</div>
      <div className="emp">
        <div
          className="colorBox"
          style={
            props.content.status == "Active"
              ? { backgroundColor: "#d3f4be" }
              : props.content.status == "Probation"
              ? { backgroundColor: "#f5ecb8" }
              : { backgroundColor: "#ffbfbf" }
          }
        >
          {props.content.status}
        </div>
      </div>

      <div className="emp">{props.content.experience}</div>

      <div className="emp">
        <DeletePopup
          state={props.state}
          dispatch={props.dispatch}
          id={props.content.employeeid}
        />
        <img src={edit} onClick={handleEditClick} />
      </div>
    </div>
  );
};

export default EmployeeDetails;
