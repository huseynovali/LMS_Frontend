import { PiGraduationCapLight } from "react-icons/pi";
import { FaUser, FaBook, FaPlus, FaRegCalendarAlt, FaRegBuilding } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { id } from "date-fns/locale";

const sidebarLinksData = {
  student: [
    {
      name: "Qruplar",
      idName: "courses",
      link: "/student/courses",
      icon: <PiGraduationCapLight size={24} />,
    },
    {
      name: "Cədvəl",
      idName: "calendar",
      link: "/student/calendar",
      icon: <FaRegCalendarAlt size={24} />,
    },
  ],
  teacher: [
    {
      name: "Qruplar",
      idName: "courses",
      link: "/teacher/courses",
      icon: <FaBook size={24} />,
    },

    {
      name: "Sinaq Yarat",
      idName: "create-quiz",
      link: "/teacher/create-quiz",
      icon: <MdQuiz size={24} />,
    },

    {
      name: "Cədvəl",
      idName: "calendar",
      link: "/teacher/calendar",
      icon: <FaRegCalendarAlt size={24} />,
    },
    {
      name: "Sual əlavə et",
      idName: "add-question",
      link: "/teacher/add-question",
      icon: <FaPlus size={24} />,
    },
  ],
  admin: [
    {
      name: "Qruplar",
      idName: "courses",
      link: "/admin/courses",
      icon: <FaBook size={24} />,
    },
    {
      name: "Tələbələr",
      idName: "students",
      link: "/admin/students",
      icon: <FaUser size={24} />,
    },
    {
      name: "Müəllimlər",
      idName: "teachers",
      link: "/admin/teachers",
      icon: <FaUser size={24} />,
    },
    {
      name: "Qrup Yarat",
      idName: "create-group",
      link: "/admin/create-group",
      icon: <FaPlus size={24} />,
    },
  ],
  superadmin: [
    {
      name: "Filiallar",
      idName: "branches",
      link: "/superadmin/branches",
      icon: <FaRegBuilding  size={24} />,
    },
  ],
};

export default sidebarLinksData;
