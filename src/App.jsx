// import "./styles.css";
import Login from "./pages/Login";
import CreateEmployee from "./pages/CreateEmployee";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound";
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/Home";
import EmpList from "./pages/EmpList";


const App = () => {

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
        { path: "createemployees", element: <CreateEmployee /> },
        { path: "employeelist", element: < EmpList/>}
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
