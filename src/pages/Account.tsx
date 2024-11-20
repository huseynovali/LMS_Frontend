import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import cover from "../assets/cover.png";
import { accoundData } from "../fakedata";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { tabs } from "../constant/accoundTabs";

function Account() {
  const data: {
    [key: string]: {
      name: string;
      link: string;
    }[];
  } = tabs;
  const { role } = useParams<{ role: "student" | "teacher" | "admin" }>();
  const location = useLocation();
  const activetab =
    location.pathname.split("/")[location.pathname.split("/").length - 1];
  return (
    <div className="rounded-lg">
      <div className="rounded-lg">
        <div className="header w-full">
          <img src={cover} alt="" className="w-full h-[150px]" />
          <div className="realtive bg-white px-6 rounded-b-lg">
            <div className="flex flex-wrap gap-x-6">
              <div className="relative -top-10 bg-[#667797] rounded-full w-[120px] h-[120px] shrink-0 flex items-center justify-center text-white border-[5px] border-white">
                <span className="text-xl font-semibold">
                  {accoundData.name[0] + accoundData.surname[0]}
                </span>
              </div>
              <div className="flex  relative  sm:top-0 lg:top-0 justify-between items-center">
                <div>
                  <p className="text-2xl font-semibold">
                    {accoundData.name} {accoundData.surname}{" "}
                    {accoundData.fatherName}
                  </p>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center mt-3">
                    <div className="flex items-center ">
                      <MdOutlineLocationOn
                        size={20}
                        className="text-[#667797]"
                      />
                      <span className="text-[#667797] text-sm ml-1">
                        {accoundData.address}
                      </span>
                    </div>
                    <div className="flex items-center mt-3 lg:mt-0 lg:ml-5">
                      <MdOutlineCalendarMonth
                        size={20}
                        className="text-[#667797] shrink-0"
                      />
                      <span className="text-[#667797] text-sm ml-1">
                        Qoşulma tarixi:
                        {accoundData.joinDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 overflow-auto mt-5">
              <ul className="flex gap-x-4">
                {role &&
                  data[role]?.map((tab) => (
                    <Link
                      to={`/${role}/profile/${tab.link}`}
                      key={tab.name}
                      className={`${
                        activetab == tab.link
                          ? "bg-[#ECF2FE] text-[#3e80f9]"
                          : ""
                      } py-2 px-4  rounded-t-lg`}
                    >
                      {tab.name}
                    </Link>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Account;
