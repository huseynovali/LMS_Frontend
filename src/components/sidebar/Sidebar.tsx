import sidebarLinksData from "../../constant/sidebarlinks";
import { useEffect, useState } from "react";
import { sidebarlinks } from "../../types/types";
import { useParams } from "react-router";
import Logo from "../../assets/logo.png";
import { FaChevronRight } from "react-icons/fa";

function Sidebar({
  open,
  setOpen,
}: {
  readonly open: boolean;
  readonly setOpen: Function;
}) {
  const [sidebarLinks, setSidebarLinks] = useState<sidebarlinks[]>([]);
  const params = useParams();
  const { student, teacher, admin } = sidebarLinksData;

  useEffect(() => {
    if (params.role === "student") {
      setSidebarLinks(student);
    } else if (params.role === "teacher") {
      setSidebarLinks(teacher);
    } else if (params.role === "admin") {
      setSidebarLinks(admin);
    }
  }, [params.role]);

  return (
    <div className="flex relative">
      {open && (
        <button
          onClick={() => setOpen(false)}
          onKeyDown={(e) => e.key === "Enter" && setOpen(false)}
          className="w-full h-screen bg-black opacity-50 fixed inset-0 z-10 lg:hidden"
          aria-label="Close sidebar"
        ></button>
      )}

      <div className="flex h-screen">
        <nav
          className={`fixed left-0 top-0 h-full border-r bg-white border-[#D5DBE7] z-20 transform ${
            open ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out w-64 lg:translate-x-0 lg:relative h-screen p-5`}
        >
          <div className="w-full flex justify-center">
            <img src={Logo} alt="" />
          </div>
          <ul className="p-4">
            {sidebarLinks.map((link) => (
              <li key={link.name} className="my-4">
                <a
                  href={link.link}
                  className=" px-4 py-2 text-[#667797] hover:bg-red-500 rounded flex items-center justify-between"
                >
                  <span className="text-[1rem]">{link.name}</span>
                  {link.children && (
                    <FaChevronRight className="text-[14px] font-light" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
