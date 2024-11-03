import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown, MdMoveDown } from "react-icons/md";
import { accoundData } from "../../fakedata";
import { BsGear } from "react-icons/bs";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Profile() {
  const [profileOpen, setProfileOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (profileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileOpen]);

  const handleClickOutside = (e: MouseEvent) => {
    if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
      setProfileOpen(false);
    }
  };

  return (
    <div className="relative" ref={boxRef}>
      <button
        onClick={() => setProfileOpen((prev) => !prev)}
        className="border border-[#7585A5] rounded-full flex items-center gap-x-3 p-1 pr-10 cursor-pointer relative"
      >
        <div className="bg-[#667797] rounded-full w-8 h-8 flex items-center justify-center text-white">
          <p className="text-xs">JD</p>
        </div>

        <MdKeyboardArrowDown size={20} className="absolute top-1/4 right-2" />
      </button>
      {profileOpen && (
        <div className="absolute mt-2 bg-white border border-[#D5DBE7] rounded-lg shadow-md p-5 w-[300px] -left-[calc(100%_+_150px)] top-[calc(100%_+_10px)]">
          <div className="flex gap-x-2 border-b border-[#dee2e6] pb-5 mb-5">
            <div>
            {accoundData?.image === null ? (
              <div className="bg-[#667797] rounded-full w-12 h-12 shrink-0 flex items-center justify-center text-white">
                {accoundData.name.split(" ")[0][0] +
                  accoundData.name.split(" ")[1][0]}
              </div>
            ) : (
              <img
                src={accoundData.image}
                alt="profile"
                className="w-12 h-12 rounded-full"
              />
            )}</div>
            <div>
              <p className="text-lg font-semibold">{accoundData.name}</p>
              <p className="text-[#7585A5] text-sm">{accoundData.email}</p>
            </div>
          </div>

          <div>
            <ul>
              <li >
                <Link to="/profile" className="flex items-center gap-x-2 py-3 px-5">
                <BsGear size={20} className="text-[#487FFF]" />
                <p className="text-[15px] font-medium text-[#667797]">Accound Setting</p>
                </Link>
              </li>
              
              <li >
                <button className="flex items-center gap-x-2 py-3 px-5">
                <RiLogoutBoxLine size={20}  className="text-[#487FFF]" />
                <p className="text-[15px] font-medium text-[#667797]">Logout</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
