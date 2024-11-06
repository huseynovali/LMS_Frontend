import { PiGraduationCapLight } from "react-icons/pi";
import { FaUser, FaBook, FaPlus, FaCog } from "react-icons/fa";

const sidebarLinksData = {
  student: [
    {
      name: "Dashboard",
      icon: <FaBook size={24} />,
      children: [
        { name: "Dashboard", link: "/student/dashboard" },
        { name: "Dashboard 2", link: "/student/dashboard-2" },
      ],
    },
    {
      name: "Profile",
      icon: <FaUser size={24} />,
      children: [
        { name: "Profile", link: "/student/profile" },
        { name: "Profile 2", link: "/student/profile-2" },
      ],
    },
    {
      name: "Courses",
      link: "/student/courses",
      icon: <PiGraduationCapLight size={24} />,
    },
    {
      name: "Settings",
      link: "/student/settings",
      icon: <FaCog size={24} />,
    },
  ],
  teacher: [
    {
      name: "Dashboard",
      link: "/teacher/dashboard",
      icon: <FaBook size={24} />,
    },
    {
      name: "Profile",
      link: "/teacher/profile",
      icon: <FaUser size={24} />,
    },
    {
      name: "Courses",
      link: "/teacher/courses",
      icon: <FaBook size={24} />,
    },
    {
      name: "Settings",
      link: "/teacher/settings",
      icon: <FaCog size={24} />,
      children: [
        { name: "Settings", link: "/teacher/settings" },
        { name: "Settings 2", link: "/teacher/settings-2" },
      ],
    },
    {
      name: "Create Course",
      link: "/teacher/create-course",
      icon: <FaPlus size={24} />,
    },
    {
      name: "Create Quiz",
      link: "/teacher/create-quiz",
      icon: <FaPlus size={24} />,
    },
    {
      name: "Students",
      link: "/teacher/students",
      icon: <FaUser size={24} />,
    },
  ],
  admin: [
    {
      name: "Dashboard",
      link: "/admin/dashboard",
      icon: <FaBook size={24} />,
    },
    {
      name: "Profile",
      link: "/admin/profile",
      icon: <FaUser size={24} />,
    },
    {
      name: "Courses",
      link: "/admin/courses",
      icon: <FaBook size={24} />,
    },
    {
      name: "Settings",
      link: "/admin/settings",
      icon: <FaCog size={24} />,
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
    }
  ],
};

export default sidebarLinksData;
