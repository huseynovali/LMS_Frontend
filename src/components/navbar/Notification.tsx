import { useEffect, useRef, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { notificationData } from "../../fakedata";

function Notification() {
  const [notification, setNotification] = useState(true);
  const [notificationBox, setNotificationBox] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (notificationBox) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notificationBox]);

  const handleClickOutside = (e: MouseEvent) => {
    if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
      setNotificationBox(false);
    }
  };

  return (
    <div className="relative ">
      <button
        onClick={() => setNotificationBox((prev) => !prev)}
        className={`${
          notification && "animate-shake"
        } "notification relative w-10 h-10 bg-[#ecf2fe] hover:bg-[#D8E6FE]  rounded-full  transition-all flex items-center  justify-center rounded-full"`}
      >
        {notification && (
          <div className="absolute w-3 h-3 bg-red-500 rounded-full top-1 right-1 ">
            <div className="relative rounded-full w-3 h-3 bg-red-500 animate-ping"></div>
          </div>
        )} 
        <FaRegBell size={20} />
      </button>
      {notificationBox && notification && (
        <div
          ref={boxRef}
          className="notificationBox absolute w-[300px] -left-[calc(100%_+_150px)]   lg:-left-[calc(100%_+_220px)] top-[calc(100%_+_10px)] border-[#D5DBE7] border rounded-lg"
        >
          <div className="flex justify-between items-center bg-[#3E80F9] w-full  py-2 px-6 rounded-t-lg text-white text-[20px] font-semibold">
            <p>Notifications</p>
            <MdOutlineClose
              size={20}
              onClick={() => setNotificationBox(false)}
            />
          </div>
          <div className="p-6 h-[200px] overflow-auto">
            <ul>
              {notificationData.map((data) => (
                <li
                  key={data.id}
                  className="flex justify-between  gap-x-3 mb-6"
                >
                  <div className="bg-[#667797] rounded-full w-12 h-12 shrink-0 flex items-center justify-center text-white">
                    {data.name.split(" ")[0][0] + data.name.split(" ")[1][0]}
                  </div>
                  <div className="border-b border-[#D5DBE7] pb-6 relative">
                    <p className="text-[#667797] text-[15px] font-medium">
                      {data.message.split(" ").length > 6
                        ? data.message.split(" ").slice(0, 6).join(" ") + "..."
                        : data.message}
                    </p>
                    <p className="text-[#7585a5] text-sm">{data.time}</p>
                    <button className="text-[#3E80F9] text-sm font-semibold">
                      View
                    </button>
                    <button className="absolute top-1 -right-1">
                      <MdOutlineClose />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notification;
