import { DesktopPanel } from "./desktopPanel";
import { MobilePanel } from "./mobilePanel";

export function TodoPanel() {
  return (
    <main className="w-full">
      <div className="block md:hidden">
        <MobilePanel />
      </div>

      <div className="hidden md:block">
        <DesktopPanel />
      </div>
    </main>
  );
}
