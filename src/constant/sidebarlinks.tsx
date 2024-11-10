import { PiGraduationCapLight } from "react-icons/pi";
import {
  FaUser,
  FaBook,
  FaPlus,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { MdQuiz } from "react-icons/md";

const sidebarLinksData = {
  student: [
    {
      name: "Qruplar",
      link: "/student/courses",
      icon: <PiGraduationCapLight size={24} />,
    },
    {
      name: "Cədvəl",
      link: "/student/calendar",
      icon: <FaRegCalendarAlt size={24} />,
    },
  ],
  teacher: [
    {
      name: "Qruplar",
      link: "/teacher/courses",
      icon: <FaBook size={24} />,
    },

    {
      name: "Sinaq Yarat",
      link: "/teacher/create-quiz",
      icon: <MdQuiz size={24} />,
    },

    {
      name: "Cədvəl",
      link: "/teacher/calendar",
      icon: <FaRegCalendarAlt size={24} />,
    },{
      name : "Sual əlavə et",
      link : "/teacher/add-question",
      icon : <FaPlus size={24} />
    }
  ],
  admin: [
    {
      name: "Qruplar",
      link: "/admin/courses",
      icon: <FaBook size={24} />,
    },
    {
      name: "Tələbələr",
      link: "/admin/students",
      icon: <FaUser size={24} />,
    },
    {
      name: "Müəllimlər",
      link: "/admin/teachers",
      icon: <FaUser size={24} />,
    },
    {
      name: "Qrup Yarat",
      link: "/admin/create-group",
      icon: <FaPlus size={24} />,
    },
  ],
};

export default sidebarLinksData;
