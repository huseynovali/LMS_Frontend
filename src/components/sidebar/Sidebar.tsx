import sidebarLinksData from "../../constant/sidebarlinks";
import { useEffect, useState } from "react";
import { sidebarlinks } from "../../types/types";
import { useParams } from "react-router";

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
          className="w-full h-screen bg-black opacity-50 fixed inset-0 z-10"
          aria-label="Close sidebar"
        ></button>
      )}

      <div className="flex h-screen">
        <nav
          className={`fixed left-0 top-0 h-full bg-red-400 z-20 transform ${
            open ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out w-64 lg:translate-x-0 lg:relative h-screen`}
        >
          <ul className="p-4">
            {sidebarLinks.map((link) => (
              <li key={link.name} className="mb-4">
                <a
                  href={link.link}
                  className="block p-2 text-white hover:bg-red-500 rounded"
                >
                  {link.name}
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
