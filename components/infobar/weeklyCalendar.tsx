"use client";

import { DayItem, getWeeklyDates } from "@/lib/date";
import { setSelectedDate, useTodoStore } from "@/store/useTodoStore";
import clsx from "clsx";
import { Carousel, CarouselContent } from "../ui/carousel";

export function WeeklyCalendar() {
  const selectedDate = useTodoStore((state) => state.selectedDate);
  const weeklyDates = getWeeklyDates();

  return (
    <Carousel>
      <CarouselContent className="flex items-center justify-between gap-3">
        {weeklyDates.map((day: DayItem) => {
          const isActive = day.fullDate === selectedDate;
          const isPast = new Date(day.fullDate) < new Date();

          return (
            <button
              key={day.fullDate}
              onClick={() => setSelectedDate(day.fullDate)}
              className={clsx(
                "text-primar-800 transition-color flex min-w-13 flex-1 flex-col items-center justify-center rounded-md px-3 py-2 duration-300 focus:outline-none",
                isActive
                  ? "bg-primary-800 text-primary-0 font-bold shadow-md"
                  : "hover:text-primary-800/80 bg-transparent",
                isPast && !isActive && "text-primary-800/50",
              )}
            >
              <span
                className={
                  "mb-1 text-xs font-semibold tracking-widest uppercase"
                }
              >
                {day.dayName}
              </span>

              <span className="text-2xl font-bold tracking-tight">
                {day.dayNum}
              </span>
            </button>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
