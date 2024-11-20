import { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
  format,
  parseISO,
} from "date-fns";
type Event = {
  name: string;
  dates: string[];
  teacher: string;
  time: string;
  days?: string;
};
export function useCalendar(
  eventsData: {
    id: number;
    name: string;
    dates: string[];
    teacher: string;
    time: string;
    days?: string;
  }[]
) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedCourse, setSelectedCourse] = useState<Event | null>(null);
  const startDate = startOfWeek(startOfMonth(currentMonth));
  const endDate = endOfWeek(endOfMonth(currentMonth));
  const prevMonth = () => setCurrentMonth((prev) => addDays(prev, -30));
  const nextMonth = () => setCurrentMonth((prev) => addDays(prev, 30));
  const getEventsForDate = (date: Date) => {
    return eventsData.filter((course) =>
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
            key={day.toISOString()}
            className="h-32 mx-1/2 my-1 overflow-auto flex flex-col items-end justify-start cursor-pointer rounded-lg border p-2"
          >
            <span>{format(day, "d")}</span>
            {events.map((event) => (
              <button
                key={event.id}
                className="text-xs w-full px-3 py-2 rounded-lg bg-[#3E80F9] bg-opacity-20 my-1 relative"
                onClick={() => setSelectedCourse(event)}
              >
                {event.name}
              </button>
            ))}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-1" key={day.toISOString()}>
          {days}
        </div>
      );
      days = [];
    }
    return rows;
  };

  return {
    currentMonth,
    prevMonth,
    nextMonth,
    generateCalendar,
    selectedCourse,
    setSelectedCourse,
  };
}
