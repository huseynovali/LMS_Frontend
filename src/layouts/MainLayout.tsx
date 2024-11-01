import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import navbarLinks from "../constant/sidebarlinks";

function MainLayout() {
  const [navbarlinks, setNavbar] = useState([]);
  const params = useParams();
  const { student, teacher, admin } = navbarLinks;
  useEffect(() => {
    if (params.role === "student") {
      setNavbar(student);
    } else if (params.role === "teacher") {
      setNavbar(teacher);
    } else if (params.role === "admin") {
      setNavbar(admin);
    }
  }, []);

  return (
    <div>
      <nav>
        <ul>
          {navbarlinks.map((link) => (
            <li key={link.name}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default MainLayout;
