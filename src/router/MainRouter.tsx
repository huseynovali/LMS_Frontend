import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";

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
            element: <div className="w-full bg-red-900">Profile</div>,
          }
        ],
      },
    ],
  },
]);

export default router;
