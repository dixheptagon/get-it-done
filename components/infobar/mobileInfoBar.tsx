import { MdOutlineSettings } from "react-icons/md";
import { ProgressBar } from "./progressBar";
import { WeeklyCalendar } from "./weeklyCalendar";

export function MobileInfobar() {
  return (
    <main>
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-bold">Get It Done</h1>
        <MdOutlineSettings className="w-6 h-6 text-black" />
      </div>
      <hr className="-mx-4 my-2 text-primary-300" />

      <div className="flex justify-between items-baseline">
        <h1 className="text-3xl font-bold">Workspace</h1>
        <h5 className="font-jetbrains-mono text-xs">65% DONE</h5>
      </div>

      <div className="py-3">
        <ProgressBar progress={65} />
      </div>

      <div className="py-2">
        <WeeklyCalendar />
      </div>
    </main>
  );
}
