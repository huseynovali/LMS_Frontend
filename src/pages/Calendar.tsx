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
import { MdClose } from "react-icons/md";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectCourse, setSelectCourse] = useState({});
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
              <button
                key={index}
                className="text-xs w-full px-3 py-2 rounded-lg bg-[#3E80F9] bg-opacity-20 my-2 relative "
                onClick={() => setSelectCourse(event)}
              >
                {event.name}
              </button>
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
    <div className="mx-auto mt-10 overflow-auto">
      <div className="w-[1024px]">
        <div className="flex justify-between items-center mb-4 ">
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
        <div className="grid grid-cols-7 text-center font-bold mb-2 ">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center">
              {day}
            </div>
          ))}
        </div>
        <div className="overflow-auto ">{generateCalendar()}</div>
        {selectCourse && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="w-[300px] h-[300px]   shadow-lg border bg-white   absolute inset-[40%] z-30 rounded-lg">
              <div className="p-2">
                <div className="px-2 py-3 border-b">
                  <p className="text-xl font-semibold">{selectCourse.name}</p>
                  <MdClose
                    size={20}
                    onClick={() => setSelectCourse(null)}
                    className="absolute right-2 top-2 cursor-pointer"
                  />
                </div>
                <p className="text-xl my-2">Müellim : {selectCourse.teacher}</p>
                <p className="text-xl my-2">Saat : {selectCourse.time}</p>
                <p className="text-xl my-2">Gün : {selectCourse.days}</p>
                <div className="mt-5">
                  <button className="px-3 py-2 rounded-lg bg-gray-500 text-white">
                    Saatı dəyiş
                  </button>
                  <button className="px-3 py-2 rounded-lg  bg-red-400 text-white mx-2">
                    Təxirə sal
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calendar;
