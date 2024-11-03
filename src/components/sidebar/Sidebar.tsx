import sidebarLinksData from "../../constant/sidebarlinks";
import { useEffect, useState } from "react";
import { sidebarlinks } from "../../types/types";
import { useParams } from "react-router";
import Logo from "../../assets/logo.png";
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
  const { student, teacher, admin } = sidebarLinksData;
  const [toggle, setToggle] = useState<string | null>(null);
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
          <Link to={`/${params.role}`} className="w-full flex justify-center">
            <img src={Logo} alt="" />
          </Link>
          <ul>
            {sidebarLinks.map((link) => (
              <li key={link.name} className="my-4">
                {link.children ? (
                  <div>
                    <button
                      onClick={() =>
                        setToggle((toggle) => (toggle ? "" : link.name))
                      }
                      className=" px-4 py-2 text-[#667797] hover:bg-[#3E80F9] hover:bg-opacity-30 hover:text-[#3E80F9] rounded w-full flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <span className="mr-2">{link.icon}</span>
                        <span className="text-[1rem]">{link.name}</span>
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
                        } transition-all duration-500 overflow-hidden w-full`}
                      >
                        {link.children.map((child) => (
                          <li key={child.name}>
                            <a
                              href={child.link}
                              className=" px-4 py-2 text-[#667797]  rounded flex items-center hover:text-[#3E80F9]"
                            >
                              <span className="text-[1rem]">{child.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <a
                    href={link?.link}
                    className=" px-4 py-2 text-[#667797] hover:bg-[#3E80F9] hover:bg-opacity-30 hover:text-[#3E80F9] rounded  flex items-center "
                  >
                    <span className="mr-2">{link.icon}</span>
                    <span className="text-[1rem]">{link.name}</span>
                  </a>
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
