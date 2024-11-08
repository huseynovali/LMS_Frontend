import { PiGraduationCapLight } from "react-icons/pi";
import {
  FaUser,
  FaBook,
  FaPlus,
  FaRegCalendarAlt,
} from "react-icons/fa";

const sidebarLinksData = {
  student: [
    {
      name: "Courses",
      link: "/student/courses",
      icon: <PiGraduationCapLight size={24} />,
    },
    {
      name: "Calendar",
      link: "/student/calendar",
      icon: <FaRegCalendarAlt size={24} />,
    },
  ],
  teacher: [
    {
      name: "Courses",
      link: "/teacher/courses",
      icon: <FaBook size={24} />,
    },

    {
      name: "Create Quiz",
      link: "/teacher/create-quiz",
      icon: <FaPlus size={24} />,
    },

    {
      name: "Calendar",
      link: "/teacher/calendar",
      icon: <FaRegCalendarAlt size={24} />,
    },
  ],
  admin: [
    {
      name: "Courses",
      link: "/admin/courses",
      icon: <FaBook size={24} />,
    },
    {
      name: "Students",
      link: "/admin/students",
      icon: <FaUser size={24} />,
    },
    {
      name: "Teachers",
      link: "/admin/teachers",
      icon: <FaUser size={24} />,
    },
    {
      name: "Create Group",
      link: "/admin/create-group",
      icon: <FaPlus size={24} />,
    },
  ],
};

export default sidebarLinksData;
