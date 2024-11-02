import { Children } from "react";

const sidebarLinksData = {
  student: [
    {
      name: "Dashboard",
      link: "/student/dashboard",
      icon: "dashboard",
      children: [
        {
          name: "Dashboard",
          link: "/student/dashboard",
        },
        {
          name: "Dashboard 2",
          link: "/student/dashboard-2",
        },
      ],
    },
    {
      name: "Profile",
      link: "/student/profile",
      icon: "user",
      children:[
        {
          name: "Profile",
          link: "/student/profile",
        },
        {
          name: "Profile 2",
          link: "/student/profile-2",
        },
      ]
    },
    {
      name: "Courses",
      link: "/student/courses",
      icon: "book",
    },
    {
      name: "Settings",
      link: "/student/settings",
      icon: "settings",
    },
  ],

  teacher: [
    {
      name: "Dashboard",
      link: "/teacher/dashboard",
      icon: "dashboard",
    },
    {
      name: "Profile",
      link: "/teacher/profile",
      icon: "user",
    },
    {
      name: "Courses",
      link: "/teacher/courses",
      icon: "book",
    },
    {
      name: "Settings",
      link: "/teacher/settings",
      icon: "settings",
      children:[
        {
          name: "Settings",
          link: "/teacher/settings",
        },
        {
          name: "Settings 2",
          link: "/teacher/settings-2",
        },
      ]
    },
    {
      name: "Create Course",
      link: "/teacher/create-course",
      icon: "plus",
    },
    {
      name: "Create Quiz",
      link: "/teacher/create-quiz",
      icon: "plus",
    },
    {
      name: "students",
      link: "/teacher/students",
      icon: "user",
    },
  ],
  admin: [
    {
      name: "Dashboard",
      link: "/admin/dashboard",
      icon: "dashboard",
    },
    {
      name: "Profile",
      link: "/admin/profile",
      icon: "user",
    },
    {
      name: "Courses",
      link: "/admin/courses",
      icon: "book",
    },
    {
      name: "Settings",
      link: "/admin/settings",
      icon: "settings",
    },

    {
      name: "students",
      link: "/admin/students",
      icon: "user",
    },
    {
      name: "teachers",
      link: "/admin/teachers",
      icon: "user",
    },
  ],
};

export default sidebarLinksData;