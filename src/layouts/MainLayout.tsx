
import { Outlet } from "react-router";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";


function MainLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div> 
      <Navbar open={open} setOpen={setOpen}  />
      <Sidebar open={open} setOpen={setOpen}  />

      <Outlet />
    </div>
  );
}

export default MainLayout;
