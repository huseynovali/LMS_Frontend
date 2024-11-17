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
import CreateGroup from "../pages/CreateGroup";
import Students from "../pages/Students";
import StudentDetail from "../pages/StudentDetail";
import Teachers from "../pages/Teachers";
import TeacherDetail from "../pages/TeacherDetail";
import Calendar from "../pages/Calendar";
import AddQuestion from "../pages/AddQuestion";
import Login from "../pages/Login";
import Home from "../pages/Home";

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
            index: true,
            element: <Home />,
          },
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
            path:"calendar",
            element: <Calendar/>
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
                element: <Absences />,
              },
              {
                path: "students",
                element: <CoursesStudents />,
              },
            ],
          },
          {
            path: "create-group",
            element: <CreateGroup />,
          },
          {
            path: "students",
            element: <Students />,
          },
          {
            path: "student/:id",
            element: <StudentDetail />,
          },
          {
            path: "teachers",
            element: <Teachers />,
          },
          {
            path: "teacher/:id",
            element: <TeacherDetail />,
          },
          {
            path:"add-question",
            element:<AddQuestion/>
          }

        ],
      },
    ],
  },
  {
    path:"login",
    element:<Login/>
  }
]);

export default router;
