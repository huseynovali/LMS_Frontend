function Navbar({
  open,
  setOpen,
}: {
  readonly open: boolean;
  readonly setOpen: Function;
}) {
  return (
    <div className="w-full py-3 bg-red-300">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 m-4 bg-blue-500 text-white rounded lg:hidden"
      >
        {open ? "Close" : "Open"} Sidebar
      </button>
      <p>Nabar</p>
    </div>
  );
}

export default Navbar;
