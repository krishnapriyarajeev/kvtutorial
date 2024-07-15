// import "./styles.css";
import Login from "./pages/Login";
import CreateEmployee from "./pages/CreateEmployee";
import { useReducer, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound";
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/Home";
import EmpList from "./pages/EmpList";
import EditEmployee from "./pages/EditPage";
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage";
import obj from "./assets/EmpData";
import reducer from "./store/useReducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, { employees: obj });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <NotFound />,
    },
    {
      path: "/employees",
      element: <HomeLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "createemployees",
          element: <CreateEmployee/>,
        },
        { path: "employeelist", element: <EmpList state={state} dispatch={dispatch}/> },
        { path: "editemployee/:id", element: <EditEmployee /> },
        { path: "employeedetails/:id", element: <EmployeeDetailsPage /> },
      ],
    },
  ]);

  return (
    <div className="app-div">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
