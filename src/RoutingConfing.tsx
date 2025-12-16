import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Users/Login";
import SignUp from "./Pages/Users/SignUp";

import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "./Pages/Dashboard/Dashboard";
import Matches from "./Pages/Matches";
import Admin from "./Pages/Users/Admin";
import ProfilePage from "./Pages/Dashboard/Profile/Profile";
import UserData from "./Pages/Users/UserData/UserData";
// import TaskAssignList from "./Pages/TaskAssignList/TaskAssignList";
import CreateTaskForm from "./Pages/CreateTaskForm/CreateTaskForm";
import AssignedList from "./Pages/TaskAssignList/AssignedList";
import EditTaskForm from "./Pages/CreateTaskForm/EditTaskForm";
import { lazy, Suspense } from "react";

const TaskAssignList = lazy(()=> import("./Pages/TaskAssignList/TaskAssignList"));
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
        element: <SignUp />,
      },
      {
        path: "/matches",
        element: (
          <ProtectedRoute>
            <Matches />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "admin",
            element: (
             
               <Admin/>
            
              
            ),
          },
           {
            path: "user",
            element: (
              
                <UserData/>
              
              
            ),
          },
          {
            path: "task_assign",
            element: (
              <Suspense fallback={<h1>dsfs fsdf</h1>} >
                <TaskAssignList/>
              </Suspense>
            ),
          },
           {
            path: "create_task",
            element: (
              
                <CreateTaskForm/>             
              
            ),
          },
          {
            path: "edit_task/:id",
            element: (
              
                <EditTaskForm/>             
              
            ),
          },
          {
            path: "profile",
            element: (
              
                <ProfilePage/>
             
            ),
          },
           {
            path: "list_assigned",
            element: (
              
                < AssignedList/>
             
            ),
          },

       
        ],
        
      },
      {
        path: "/edit",
        element: (
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        ),
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
