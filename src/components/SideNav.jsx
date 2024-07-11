import { Link } from "react-router-dom";
import icon from "../assets/icon.svg";

const SideNav = () =>{
    return(
        <aside className="side_nav">
          <div className="emplist">
            <img id="icon" src={icon} />

            <Link to="">Home</Link>
          </div>

          <div className="emplist">
            <Link to="createemployees">Create Employee</Link>
          </div>

          <div className="emplist">
            <Link to="employeelist">Employee List</Link>
          </div>

          <div className="emplist">
            <Link to="/">Logout</Link>
          </div>
        </aside>
    )
}

export default SideNav;
