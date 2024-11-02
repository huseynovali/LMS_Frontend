import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown, MdMoveDown } from "react-icons/md";

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
        <div className="absolute  mt-2 bg-white border border-[#D5DBE7] rounded-lg shadow-md p-5 w-[300px] -left-[calc(100%_+_150px)] top-[calc(100%_+_10px)]">
          <p className="text-sm">View Profile</p>
          <p className="text-sm">Settings</p>
          <p className="text-sm">Logout</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
