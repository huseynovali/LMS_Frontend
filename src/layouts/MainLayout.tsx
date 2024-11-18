import { Outlet } from "react-router";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";

function MainLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="w-full">
        <Navbar open={open} setOpen={setOpen} />
        <div className="p-4 lg:p-6 bg-[#ECF2FE] min-h-screen relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
