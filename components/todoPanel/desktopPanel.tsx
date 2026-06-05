"use client";

import { HOURS_LOG } from "@/constants/hoursLog";
import { formattedDate } from "@/lib/dateFormatter";
import { useTodoStore } from "@/store/useTodoStore";

export function DesktopPanel() {
  const selectedDate = useTodoStore((state) => state.selectedDate);

  return (
    <div className="px-20 py-6">
      <div className="space-y-1 pb-15 pl-15">
        <h1 className="text-5xl font-bold">Daily Log</h1>
        <h2 className="text-primary-500 text-lg">
          {formattedDate(selectedDate)}
        </h2>
      </div>

      <div>
        {HOURS_LOG.map((hour) => (
          <div key={hour} className="grid min-h-28 grid-cols-[70px_1fr]">
            <div className="font-jetbrains-mono text-primary-500 text-sm">
              {hour}
            </div>

            <div className="border-primary-200 border-t-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
