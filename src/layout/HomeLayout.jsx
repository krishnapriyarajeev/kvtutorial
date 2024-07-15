import { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CreateEmployee from "../pages/CreateEmployee";
import "../stylesCE.scss";
import Logo from "../assets/kv-logo.png";
import SideNav from "../components/SideNav";

const HomeLayout = () => {
  //use usestate
  // const navigate =  useNavigate();

  // if(localStorage.getItem("Token")){
  //   navigate("/");
  // }

  // const [state, dispatch] = useReducer(reducer, { employees: obj });


  return (
    <Fragment>
      <header>
        <img className="logo" src={Logo} alt="Keyvalue Logo" />
      </header>
      <div className="parent-sidenav-outlet">
        <SideNav />
        <Outlet />
      </div>
    </Fragment>
  );
};

export default HomeLayout;
