import { HOURS_LOG } from "@/constants/hoursLog";

export function MobilePanel() {
  return (
    <main className="mt-52">
      <div className="border-primary-200 divide-primary-200 divide-y-2 border-y-2">
        {HOURS_LOG.map((hour) => (
          <div
            key={hour}
            className="font-jetbrains-mono text-primary-500 min-h-32 text-sm"
          >
            {hour}
          </div>
        ))}
      </div>
    </main>
  );
}
