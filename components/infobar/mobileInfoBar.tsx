import { MdOutlineSettings } from "react-icons/md";
import { ProgressBar } from "./progressBar";
import { WeeklyCalendarMobile } from "./weeklyCalendar";

export function MobileInfobar() {
  return (
    <main>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Get It Done</h1>
        <MdOutlineSettings className="h-6 w-6 text-black" />
      </div>
      <hr className="text-primary-300 -mx-4 my-2" />

      <div className="flex items-baseline justify-between">
        <h1 className="text-3xl font-bold">Workspace</h1>
        <h5 className="font-jetbrains-mono text-xs">65% DONE</h5>
      </div>

      <div className="py-3">
        <ProgressBar progress={65} />
      </div>

      <div className="py-2">
        <WeeklyCalendarMobile />
      </div>
    </main>
  );
}
