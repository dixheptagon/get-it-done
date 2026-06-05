import { MdOutlineSettings } from "react-icons/md";
import { ProgressBar } from "./progressBar";
import { WeeklyCalendarMobile } from "./weeklyCalendar";

export function MobileInfobar() {
  return (
    <main className="bg-primary-0 fixed inset-0 top-0 min-h-fit px-4 py-2">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Get It Done</h1>
        <MdOutlineSettings className="h-6 w-6 text-black" />
      </div>
      <div className="border-primary-200 -mx-4 my-2 border-t-2" />

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
