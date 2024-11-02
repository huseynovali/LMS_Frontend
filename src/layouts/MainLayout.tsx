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
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
