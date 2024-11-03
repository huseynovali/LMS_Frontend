import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";
import Account from "../pages/Account";
import AboutMe from "../components/profile/AboutMe";
import MyPayments from "../components/profile/MyPayments";
import EditPassword from "../components/profile/EditPassword";
import Courses from "../pages/Courses";
import CourseDetail from "../pages/CourseDetail";

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
            path: "profile",
            element: <Account />,
            children: [
              {
                path: "aboutme",
                element: <AboutMe />,
              },
              {
                path: "payment",
                element: <MyPayments />,
              },
              {
                path: "editpassword",
                element: <EditPassword />,
              },
           
            ],
          },
          {
            path: "courses",
            element: <Courses />,
          },
          {
            path: "courses/:id",
            element: <CourseDetail />,
          }
        ],
      },
    ],
  },
]);

export default router;
