import { format } from "date-fns";
import { az } from "date-fns/locale"; 
import { mycourses } from "../fakedata";
import DateDetail from "../components/calendar/DateDetail";
import { useCalendar } from "../hooks/useCalendar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Calendar() {
  const {
    currentMonth,
    prevMonth,
    nextMonth,
    generateCalendar,
    selectedCourse,
    setSelectedCourse,
  } = useCalendar(mycourses);
  return (
    <div className="w-full  mx-auto   overflow-auto relative">
      <div className="w-[1000px] md:w-full ">
        <div className=" w-[260px] sticky flex justify-between items-center gap-10 -top-1 left-[0%] my-5 ">
          <button onClick={prevMonth} className="text-gray-500">
            <FaChevronLeft size={24} />
          </button>
          <h2 className="text-xl font-semibold w-[200px] text-center">
            {format(currentMonth, "MMMM yyyy", { locale: az })}{" "}
          </h2>
          <button onClick={nextMonth} className="text-gray-500">
            <FaChevronRight size={24} />
          </button>
        </div>
        <div className="border bg-white p-5 rounded-lg">
          <div className="grid grid-cols-7 text-center font-bold mb-2">
            {["Bazar", "B.e.", "Ç.a.", "Çərşənbə", "C.a.", "Cümə", "Şənbə"].map(
              (day) => (
                <div key={day} className="text-center">
                  {day}
                </div>
              )
            )}
          </div>
          <div className="overflow-auto">{generateCalendar()}</div>
          {selectedCourse && (
            <DateDetail
              selectCourse={selectedCourse}
              setSelectCourse={setSelectedCourse}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
