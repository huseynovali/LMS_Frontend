
function Navbar({
  open,
  setOpen,
}: {
  readonly open: boolean;
  readonly setOpen: Function;
}) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="p-2 m-4 bg-blue-500 text-white rounded lg:hidden"
    >
      {open ? "Close" : "Open"} Sidebar
    </button>
  );
}

export default Navbar;
