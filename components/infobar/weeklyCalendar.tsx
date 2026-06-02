"use client";

import { DayItem, getWeeklyDates } from "@/lib/date";
import { setSelectedDate, useTodoStore } from "@/store/useTodoStore";
import clsx from "clsx";

export function WeeklyCalendar() {
  const selectedDate = useTodoStore((state) => state.selectedDate);
  const weeklyDates = getWeeklyDates();

  return (
    <div className="flex justify-between items-center gap-3 overflow-hidden -mr-4 ">
      {weeklyDates.map((day: DayItem) => {
        const isActive = day.fullDate === selectedDate;
        const isPast = new Date(day.fullDate) < new Date();

        return (
          <button
            key={day.fullDate}
            onClick={() => setSelectedDate(day.fullDate)}
            className={clsx(
              "flex flex-col items-center justify-center min-w-13 text-primar-800 flex-1 py-2 px-3 rounded-md focus:outline-none transition-color duration-300 ",
              isActive
                ? "bg-primary-800 text-primary-0 shadow-md font-bold"
                : "bg-transparent  hover:text-primary-800/80",
              isPast && !isActive && "text-primary-800/50",
            )}
          >
            <span
              className={"text-xs tracking-widest uppercase font-semibold mb-1"}
            >
              {day.dayName}
            </span>

            <span className="text-2xl font-bold tracking-tight">
              {day.dayNum}
            </span>
          </button>
        );
      })}
    </div>
  );
}
