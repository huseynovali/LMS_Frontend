import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";
import Account from "../pages/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/:role",
        element: <MainLayout />,
        children: [
          {
            path: "about",
            element: <div className="w-full bg-red-900">About</div>,
          },
          {
            path:"profile",
            element: <Account />,
            children: [
              {
                path:"aboutme",
                element: <div className="w-full bg-red-900">About Me</div>,
              },
              {
                path:"payment",
                element: <div className="w-full bg-red-900">Payment</div>,
              },
            ]
          }
        ],
      },
    ],
  },
]);

export default router;
