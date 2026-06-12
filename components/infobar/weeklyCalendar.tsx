"use client";

import {
  DayItem,
  getDisabledBeforeDates,
  getTodayDate,
  getWeeklyDates,
} from "@/lib/date";
import { setSelectedDate, useTodoStore } from "@/store/useTodoStore";
import clsx from "clsx";
import { Carousel, CarouselApi, CarouselContent } from "../ui/carousel";
import { Calendar } from "../ui/calendar";
import { formatDateToString } from "@/lib/dateFormatter";
import { useEffect, useMemo, useState } from "react";

function WeeklyCalendarMobile() {
  const selectedDate = useTodoStore((state) => state.selectedDate);
  const weeklyDates = useMemo(() => getWeeklyDates(), []);

  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const selectedIndex = weeklyDates.findIndex(
      (day) => day.fullDate === selectedDate,
    );

    api.scrollTo(selectedIndex);
  }, [api, selectedDate]);

  return (
    <Carousel setApi={setApi}>
      <CarouselContent className="flex items-center justify-between gap-3">
        {weeklyDates.map((day: DayItem) => {
          const isActive = day.fullDate === selectedDate;

          const today = formatDateToString(new Date());
          const isPast = day.fullDate < today;

          return (
            <button
              key={day.fullDate}
              onClick={() => setSelectedDate(day.fullDate)}
              className={clsx(
                "text-primar-800 transition-color flex min-w-13 flex-1 flex-col items-center justify-center rounded-md px-3 py-2 duration-100 focus:outline-none",
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

function WeeklyCalendarDesktop() {
  const selectedDate = useTodoStore((state) => state.selectedDate);
  const disabledDateLimit = useMemo(() => getDisabledBeforeDates(), []);

  return (
    <>
      <Calendar
        mode="single"
        selected={new Date(selectedDate)}
        onSelect={(date) => {
          console.log("Date:", date);
          if (date) setSelectedDate(formatDateToString(date));
        }}
        captionLayout="dropdown"
        disabled={{ before: disabledDateLimit }}
      />
    </>
  );
}

export { WeeklyCalendarMobile, WeeklyCalendarDesktop };
