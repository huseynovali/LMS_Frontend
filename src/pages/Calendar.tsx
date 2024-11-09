import { format } from "date-fns";
import { mycourses } from "../fakedata";

import DateDetail from "../components/calendar/DateDetail";
import { useCalendar } from "../hooks/useCalendar";

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
    <div className="w-full flex justify-center items-center mx-auto mt-10 overflow-auto">
      <div className="w-[1024px]">
        <div className="flex justify-between items-center mb-4">
          <button onClick={prevMonth} className="text-gray-500">
            &lt;
          </button>
          <h2 className="text-xl font-semibold">
            {format(currentMonth, "MMMM yyyy")}
          </h2>
          <button onClick={nextMonth} className="text-gray-500">
            &gt;
          </button>
        </div>
        <div className="grid grid-cols-7 text-center font-bold mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center">
              {day}
            </div>
          ))}
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
  );
}

export default Calendar;
