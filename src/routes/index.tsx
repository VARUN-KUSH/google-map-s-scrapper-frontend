import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import {Login} from "../pages/Login";
import Home from "~/pages/Home";
import { Signup } from "~/pages/SignUp";
import {useState} from "react"
//import Logout from "../pages/Logout";

const Routes = () => {
  const { currentUser } = useAuth();
  const [userState] = useState<any>(currentUser)

  // Define public routes accessible to all users
  

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/home",
          element: <Home/>
        },
    
        // {
        //   path: "/logout",
        //   element: <Logout/>,
        // },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/signup",
      element: <Signup/>,
    },
    {
      path: "/login",
      element: <Login/>,
    }
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([

    ...(!userState ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;