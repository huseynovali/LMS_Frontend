import sidebarLinksData from "../../constant/sidebarlinks";
import { useEffect, useState } from "react";
import { sidebarlinks } from "../../types/types";
import { useLocation, useParams } from "react-router";
import Logo from "../../assets/logo.jpg";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar({
  open,
  setOpen,
}: {
  readonly open: boolean;
  readonly setOpen: Function;
}) {
  const [sidebarLinks, setSidebarLinks] = useState<sidebarlinks[]>([]);
  const params = useParams();
  const location = useLocation();
  const { pathname } = location;
  const nav = pathname.split("/");
  const { student, teacher, admin, superadmin } = sidebarLinksData;
  const [toggle, setToggle] = useState<string | null>(null);
  useEffect(() => {
    if (params.role === "student") {
      setSidebarLinks(student);
    } else if (params.role === "teacher") {
      setSidebarLinks(teacher);
    } else if (params.role === "admin") {
      setSidebarLinks(admin);
    } else if (params.role === "superadmin") {
      setSidebarLinks(superadmin);
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
          } transition-all w-64 lg:translate-x-0 lg:relative h-screen p-5`}
        >
          <Link to={`/${params.role}`} className="w-full flex justify-center">
            <img
              src={Logo}
              alt="logo"
              width={145}
              height={32}
              loading="eager"
            />
          </Link>
          <ul>
            {sidebarLinks.map((link) => (
              <li key={link.name} className="my-4">
                {link.children ? (
                  <div>
                    <button
                      onClick={() =>
                        setToggle((toggle) => (toggle ? "" : link.idName))
                      }
                      className={`${
                        toggle == link.idName
                          ? "text-white bg-[#3E80F9]"
                          : "text-[#667797] hover:bg-[#3E80F9] hover:text-[#3E80F9]"
                      } px-4 py-2   hover:bg-opacity-30  rounded w-full flex items-center justify-between`}
                    >
                      <div className="flex items-center">
                        <span className="mr-2">{link.icon}</span>
                        <span className="text-[16px]">{link.name}</span>
                      </div>
                      {toggle === link.name ? (
                        <FaChevronRight className="text-[14px] font-light transform rotate-90" />
                      ) : (
                        <FaChevronRight className="text-[14px] font-light" />
                      )}
                    </button>
                    <div>
                      <ul
                        className={`${
                          toggle === link.name
                            ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0"
                        }  overflow-hidden w-full`}
                      >
                        {link.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              to={child.link}
                              className=" px-4 py-2 text-[#667797]  rounded flex items-center hover:text-[#3E80F9]"
                            >
                              <span className="text-[16px]">{child.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.link ?? "#"}
                    className={`${
                      nav.includes(link.idName)
                        ? "text-white bg-[#3E80F9] "
                        : "text-[#667797] hover:bg-[#3E80F9] hover:text-[#3E80F9] hover:bg-opacity-30 "
                    } px-4 py-2 rounded w-full flex items-center`}
                  >
                    <span className="mr-2">{link.icon}</span>
                    <span className="text-[16px]">{link.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
