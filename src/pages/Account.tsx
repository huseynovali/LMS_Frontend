import cover from "../assets/cover.png";
import { accoundData } from "../fakedata";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";

function Account() {
  return (
    <div className="rounded-lg">
      <div className="rounded-lg">
        <div className="header w-full">
          <img src={cover} alt="" className="w-full h-[150px]" />
          <div className="realtive bg-white px-6 ">
            <div className="flex flex-wrap gap-x-6">
              <div className="relative -top-10 bg-[#667797] rounded-full w-[120px] h-[120px] shrink-0 flex items-center justify-center text-white border-[5px] border-white">
                <span className="text-xl font-semibold">
                  {accoundData.name[0] + accoundData.surname[0]}
                </span>
              </div>

              <div className="flex  relative -top-5 lg:top-0 justify-between items-center">
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
            <div className="px-3">asd</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
