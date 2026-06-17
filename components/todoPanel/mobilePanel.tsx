"use client";
import { HOURS_LOG } from "@/constants/hoursLog";
import { useCurrentTime } from "@/hooks/useCurrentTime";
import { useHourPanelHeights } from "@/hooks/useHourPanelHeights";
import { formatDateToString, formatTime } from "@/lib/dateFormatter";
import { useTodoStore } from "@/store/useTodoStore";
import clsx from "clsx";
import { FaRegClock } from "react-icons/fa";
import { CurrentTimeTracker } from "./currentTimeTracker";
import { useShallow } from "zustand/react/shallow";
import { openTodoDetail } from "@/store/useTodoUIStore";
import { IoMdDoneAll } from "react-icons/io";

export function MobilePanel() {
  const todos = useTodoStore(
    useShallow((state) =>
      state.todos.filter((todo) => todo.date === state.selectedDate),
    ),
  );

  const { activeHour, progress } = useCurrentTime(60000);
  const { hourPanelRef, hourHeightPanel } = useHourPanelHeights([todos]);

  const selectedDate = useTodoStore((state) => state.selectedDate);
  const date = new Date();
  const today = formatDateToString(date);
  const isToday = selectedDate === today;
  const isPast = selectedDate < today;
  const currentTime = formatTime(date);

  return (
    <main className="mt-52 mb-12">
      <div className="border-primary-200 divide-primary-200 divide-y-2 border-y-2">
        {HOURS_LOG.map((hour) => {
          const hourTodos = todos.filter((todo) => todo.startTime === hour);
          const sectionHeight = hourHeightPanel[hour] || 0;

          return (
            <div
              key={hour}
              ref={(el) => {
                hourPanelRef.current[hour] = el;
              }}
              className={clsx(
                "font-jetbrains-mono text-primary-500 relative flex min-h-32 gap-4 text-sm",
                activeHour <= hour && "text-primary-800",
              )}
            >
              <p>{hour}</p>

              {isToday && hour === activeHour && (
                <CurrentTimeTracker
                  sectionHeight={sectionHeight}
                  progress={progress}
                />
              )}

              <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
                {hourTodos.map((todo) => {
                  const isTimePast = todo.endTime < currentTime;

                  return (
                    <button
                      key={todo.id}
                      onClick={() => openTodoDetail(todo)}
                      className={clsx(
                        "border-primary-500 text-primary-800 font-inter flex cursor-pointer flex-col space-y-2 rounded-xs border-2 p-2 text-left",
                        (isTimePast || isPast) && "opacity-45",
                      )}
                    >
                      <p
                        className={clsx(
                          "pr-4 text-base font-semibold",
                          todo.isDone && "line-through",
                        )}
                      >
                        {todo.title}
                      </p>

                      <p className="text-primary-600 line-clamp-3 text-sm">
                        {todo.description}
                      </p>

                      <div className="mt-auto flex items-center justify-between">
                        <div className="font-jetbrains-mono flex items-center gap-2 text-xs font-bold">
                          <FaRegClock className="h-3 w-3" />
                          <div className="flex gap-1">
                            <p>{todo.startTime}</p>
                            <span>-</span>
                            <p>{todo.endTime}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {todo.isDone && <IoMdDoneAll className="h-6 w-6" />}
                          {todo.isImportant && (
                            <p className="font-jetbrains-mono bg-primary-800 text-primary-0 w-fit p-1 text-xs uppercase">
                              Urgent
                            </p>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
