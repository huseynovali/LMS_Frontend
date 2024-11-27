import { useParams } from "react-router";
import Notification from "./Notification";
import Profile from "./Profile";
import { MdMenu } from "react-icons/md";
import { hasPermission } from "../../hooks/hasPermision";
function Navbar({
  open,
  setOpen,
}: {
  readonly open: boolean;
  readonly setOpen: Function;
}) {
  const { role } = useParams<{ role: "student" | "admin" | "teacher" }>();
  return (
    <div className="w-full py-4 border-b bg-white border-[#D5DBE7] px-6 flex justify-between items-center">
      <button onClick={() => setOpen(!open)} className="lg:hidden">
        <MdMenu size={26} />
      </button>
      <div></div>
      <div className="flex gap-x-2">
        {role && hasPermission(role, "notification:owncomments") && (
          <Notification />
        )}

        <Profile />
      </div>
    </div>
  );
}

export default Navbar;
