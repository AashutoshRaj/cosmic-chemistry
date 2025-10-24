import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Users/Login";
import SignUp from "./Pages/Users/SignUp";
import Matches from "./Pages/Matches";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "./Pages/Dashboard/Dashboard";
// import Dashboard from "./Pages/Dashboard/Dashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
       {
        path: "/register",
        element: <SignUp/>
      },
       {
        path: "/matches",
        element: <ProtectedRoute><Matches/></ProtectedRoute> 
      },
       {
        path: "/dashboard",
        element: <ProtectedRoute><DashboardLayout/></ProtectedRoute> 
      },
    ],
  },
]);

const RoutingConfing = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default RoutingConfing;
