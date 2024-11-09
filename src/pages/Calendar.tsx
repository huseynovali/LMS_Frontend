import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
  parseISO,
} from "date-fns";
import { mycourses } from "../fakedata";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const startDate = startOfWeek(startOfMonth(currentMonth));
  const endDate = endOfWeek(endOfMonth(currentMonth));

  const prevMonth = () => setCurrentMonth((prev) => addDays(prev, -30));
  const nextMonth = () => setCurrentMonth((prev) => addDays(prev, 30));

  const getEventsForDate = (date) => {
    return mycourses.filter((course) =>
      course.dates.some((courseDate) => isSameDay(parseISO(courseDate), date))
    );
  };

  const generateCalendar = () => {
    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const events = getEventsForDate(cloneDay);

        days.push(
          <div
            key={day}
            className={`h-32 flex flex-col items-end justify-start cursor-pointer rounded-lg border p-2 `}
          >
            <span>{format(day, "d")}</span>
            {events.map((event, index) => (
              <div
                key={index}
                onClick={() => setSelectedDateEvents(events)}
                className="text-xs w-full px-3 py-2 rounded-lg bg-[#3E80F9] bg-opacity-20 my-2 relative group"
              >
                <div className="w-[300px] h-[300px]  bg-[#3E80F9] shadow-lg border border-white hidden group-hover:block group-focus:block absolute inset-0 z-30 rounded-lg">
                  <div className="flex items-center justify-between p-2 border-b border-white bg-opacity-20 rounded-t-lg">
                    <h3 className="text-white">{event.name}</h3>
                  </div>
                  <div className="p-2">
                    <p className="text-white text-xl">Müellim : {event.teacher}</p>
                    <p className="text-white text-xl">Saat : {event.time}</p>
                  </div>
                </div>
                {event.name}
              </div>
            ))}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-1" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return rows;
  };

  return (
    <div className=" mx-auto mt-10 overflow-auto">
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
      <div className="">{generateCalendar()}</div>
    </div>
  );
}

export default Calendar;
