import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";
import AuthRouter from "./AuthRouter";

import { lazy, Suspense } from "react";
import Page404 from "../pages/Page404";
import Loading from "../pages/Loading";
import Supervisor from "../pages/Supervisor";

const UserDetail = lazy(() => import("../pages/UserDetail"));
const Account = lazy(() => import("../pages/Account"));
const AboutMe = lazy(() => import("../components/profile/AboutMe"));
const MyPayments = lazy(() => import("../components/profile/MyPayments"));
const Courses = lazy(() => import("../pages/Courses"));
const CourseDetail = lazy(() => import("../pages/CourseDetail"));
const Resources = lazy(() => import("../components/course/Resources"));
const Absences = lazy(() => import("../components/course/Absences"));
const Filials = lazy(() => import("../pages/Filials"));
const FilialDetail = lazy(() => import("../pages/FilialDetail"));
const ChangePasswordForm = lazy(
  () => import("../components/commonComponents/ChangePasswordForm")
);
const FilialAdmins = lazy(() => import("../pages/FilialAdmins"));
const CoursesStudents = lazy(
  () => import("../components/course/CoursesStudents")
);
const CreateGroup = lazy(() => import("../pages/CreateGroup"));
const Students = lazy(() => import("../pages/Students"));
const Teachers = lazy(() => import("../pages/Teachers"));
const Calendar = lazy(() => import("../pages/Calendar"));
const AddQuestion = lazy(() => import("../pages/AddQuestion"));
const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const LoginAdmin = lazy(() => import("../pages/LoginAdmin"));
const PostDetail = lazy(() => import("../components/home/PostDetail"));

const SuspenseWrapper = (Component: JSX.Element) => (
  <Suspense fallback={<Loading />}>{Component}</Suspense>
);

const router = createBrowserRouter([
  {
    path: "/:role",
    element: <PrivateRoute />,
    children: [
      {
        path: "/:role",
        element: <MainLayout />,
        children: [
          { index: true, element: SuspenseWrapper(<Home />) },
          {
            path: "branches",
            element: SuspenseWrapper(<Filials />),
          },

          {
            path: "filialsdetail/:id",
            element: SuspenseWrapper(<FilialDetail />),
          },
          {
            path: "profile",
            element: SuspenseWrapper(<Account />),
            children: [
              { path: "aboutme", element: SuspenseWrapper(<AboutMe />) },
              { path: "payment", element: SuspenseWrapper(<MyPayments />) },
              {
                path: "editpassword",
                element: SuspenseWrapper(<ChangePasswordForm />),
              },
            ],
          },
          { path: "courses", element: SuspenseWrapper(<Courses />) },
          { path: "calendar", element: SuspenseWrapper(<Calendar />) },
          {
            path: "courses/:id",
            element: SuspenseWrapper(<CourseDetail />),
            children: [
              { path: "resources", element: SuspenseWrapper(<Resources />) },
              { path: "absences", element: SuspenseWrapper(<Absences />) },
              {
                path: "coursestudents",
                element: SuspenseWrapper(<CoursesStudents />),
              },
            ],
          },
          { path: "create-group", element: SuspenseWrapper(<CreateGroup />) },
          { path: "students", element: SuspenseWrapper(<Students />) },
          { path: "teachers", element: SuspenseWrapper(<Teachers />) },
          { path: ":roleuser/:id", element: SuspenseWrapper(<UserDetail />) },
          { path: "add-question", element: SuspenseWrapper(<AddQuestion />) },
          { path: "post/:id", element: SuspenseWrapper(<PostDetail />) },
          { path: "filialadmins", element: SuspenseWrapper(<FilialAdmins />) },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <AuthRouter />,
    children: [
      { index: true, element: SuspenseWrapper(<Login />) },
      { path: ":role", element: SuspenseWrapper(<LoginAdmin />) },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },

  {
    path: "/supervisor",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <Supervisor />,
      },
    ],
  },
]);

export default router;
