
import Notification from "./Notification";
function Navbar({
  open,
  setOpen,
}: {
  readonly open: boolean;
  readonly setOpen: Function;
}) {
  

  return (
    <div className="w-full py-4 border-b bg-white border-[#D5DBE7] px-6 flex justify-between items-center">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 m-4 bg-blue-500 text-white rounded lg:hidden"
      >
        {open ? "Close" : "Open"} Sidebar
      </button>
      <div></div>
      <div className="flex gap-x-2">
        <Notification/>
        <div className="profile">profile</div>
      </div>
    </div>
  );
}

export default Navbar;
