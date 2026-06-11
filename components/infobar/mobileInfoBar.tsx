import { MdOutlineSettings } from "react-icons/md";
import { ProgressBar } from "./progressBar";
import { WeeklyCalendarMobile } from "./weeklyCalendar";

export function MobileInfobar() {
  return (
    <main className="bg-primary-0 fixed inset-0 top-0 z-10 min-h-fit px-4 py-2">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Get It Done</h1>
        <MdOutlineSettings className="h-6 w-6 text-black" />
      </div>
      <div className="border-primary-200 -mx-4 my-2 border-t-2" />

      <div className="flex items-baseline justify-between">
        <h1 className="text-3xl font-bold">Workspace</h1>
        <div className="flex items-center gap-3">
          <h5 className="font-jetbrains-mono bg-primary-800 text-primary-0 rounded-xs p-1 text-xs">
            65% DONE
          </h5>
          <h5 className="font-jetbrains-mono border-primary-200 text-primary-800 border p-1 text-xs uppercase">
            8 Task Left
          </h5>
        </div>
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
