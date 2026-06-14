import { DesktopPanel } from "./desktopPanel";
import { MobilePanel } from "./mobilePanel";
import { DesktopTodoDetail } from "./todoDetail/desktopTodoDetail";
import { MobileTodoDetail } from "./todoDetail/mobileTodoDetail";

export function TodoPanel() {
  return (
    <main className="w-full">
      <div className="block md:hidden">
        <MobilePanel />
        <MobileTodoDetail />
      </div>

      <div className="hidden md:block">
        <DesktopPanel />
        <DesktopTodoDetail />
      </div>
    </main>
  );
}
