
import { Link } from "react-router-dom";

const EmployeeDetails = (props)=>{
    return(

        <div className="data-div">
            <div className="emp">{props.content.employeename}</div>
            <div className="emp">{props.content.employeeid}</div>
            <div className="emp">{props.content.joiningdate}</div>
            <div className="emp">{props.content.department}</div>
            <div className="emp">{props.content.role}</div>
            <div className="emp">{props.content.status}</div>
            <div className="emp">{props.content.experience}</div>
            <Link to={`../editemployee/${props.content.employeeid}`}>
            <div className="emp">Action</div> 
            </Link>

            
        </div>
    )
}

export default EmployeeDetails;