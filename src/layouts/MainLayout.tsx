import { Outlet, useParams } from "react-router";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";
import SuperAdminHome from "../pages/SuperAdminHome";

function MainLayout() {
  const [open, setOpen] = useState(false);
  const { role } = useParams();
  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="w-full">
        <Navbar open={open} setOpen={setOpen} />
        <div className="p-4 lg:p-6 bg-[#ECF2FE] min-h-screen relative">
          {role == "superadmin" ? <SuperAdminHome /> : <Outlet />}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
