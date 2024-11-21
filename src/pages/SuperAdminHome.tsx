import { FaUsersLine } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiGraduationCapFill } from "react-icons/pi";
import FilialsChartDesktop from "../components/superadminPanel/FilialsChartDesktop";
import FilialChartMobile from "../components/superadminPanel/FilialChartMobile";

function SuperAdminHome() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-x-5 ">
        <div className="grid col-span-12 lg:col-span-6 grid-cols-12 gap-4">
          <div className="col-span-6 bg-white rounded-lg p-5 ">
            <div className="h-12 w-12 bg-[#3E80F9] flex justify-center items-center rounded-full">
              <PiGraduationCapFill size={24} className="text-white" />
            </div>
            <p className="text-[22px] font-bold pt-6">1231</p>
            <span className="text-[#667797]">Tələbələr</span>
          </div>
          <div className="col-span-6 bg-white rounded-lg p-5 ">
            <div className="h-12 w-12 bg-[#FF9F43] flex justify-center items-center rounded-full">
              <FaUsersLine size={24} className="text-white" />
            </div>
            <p className="text-[22px] font-bold pt-6">1231</p>
            <span className="text-[#667797]">Müəllimlər</span>
          </div>
          <div className="col-span-6 bg-white rounded-lg p-5 ">
            <div className="h-12 w-12 bg-[#3E80F9] flex justify-center items-center rounded-full">
              <HiOutlineBuildingOffice2 size={24} className="text-white" />
            </div>
            <p className="text-[22px] font-bold pt-6">12</p>
            <span className="text-[#667797]">Filiallar</span>
          </div>
          <div className="col-span-6 bg-white rounded-lg p-5 ">
            <div className="h-12 w-12 bg-[#3E80F9] flex justify-center items-center rounded-full">
              <FaUsersLine size={24} className="text-white" />
            </div>
            <p className="text-[22px] font-bold pt-6">1231</p>
            <span className="text-[#667797]">Müəllimlər</span>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-6">
          <FilialsChartDesktop />
        </div>
        <div className="col-span-12 lg:hidden mt-5">
          <FilialChartMobile />
        </div>
      </div>
    </div>
  );
}

export default SuperAdminHome;
