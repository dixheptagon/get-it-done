import { DesktopTodoFormPanel } from "./desktopTodoFormPanel";
import { MobileNav } from "./mobileNav";

export function Footer() {
  return (
    <main>
      <div className="block md:hidden">
        <MobileNav />
      </div>
      <div className="hidden md:block">
        <DesktopTodoFormPanel />
      </div>
    </main>
  );
}
