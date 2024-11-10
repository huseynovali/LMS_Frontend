import { format } from "date-fns";
import { az } from "date-fns/locale"; // Azərbaycan dilini daxil edirik
import { mycourses } from "../fakedata";

import DateDetail from "../components/calendar/DateDetail";
import { useCalendar } from "../hooks/useCalendar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useParams } from "react-router";

function Calendar() {
  const {
    currentMonth,
    prevMonth,
    nextMonth,
    generateCalendar,
    selectedCourse,
    setSelectedCourse,
  } = useCalendar(mycourses);
  const { role } = useParams();
  return (
    <div className="w-full  mx-auto mt-10 overflow-auto">
      <div className="w-[1024px]">
        <div className="flex justify-start items-center gap-10 my-10">
          <button onClick={prevMonth} className="text-gray-500">
            <FaChevronLeft size={24} />
          </button>
          <h2 className="text-xl font-semibold">
            {format(currentMonth, "MMMM yyyy", { locale: az })}{" "}
            {/* Azərbaycan dilində format */}
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
          {selectedCourse && role == "admin" && (
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
