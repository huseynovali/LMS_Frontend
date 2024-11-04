import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";
import Account from "../pages/Account";
import AboutMe from "../components/profile/AboutMe";
import MyPayments from "../components/profile/MyPayments";
import EditPassword from "../components/profile/EditPassword";
import Courses from "../pages/Courses";
import CourseDetail from "../pages/CourseDetail";
import Resources from "../components/course/Resources";
import Absences from "../components/course/Absences";
import CoursesStudents from "../components/course/CoursesStudents";

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
            children: [
              {
                path: "resources",
                element: <Resources />,
              },
              {
                path: "absences",
                element: <Absences/>,
              },
              {
                path: "students",
                element: <CoursesStudents />,
              }
            ],
          }
         
        ],
      },
    ],
  },
]);

export default router;
