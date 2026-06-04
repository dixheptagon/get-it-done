import { DesktopInfobar } from "./desktopInfoBar";
import { MobileInfobar } from "./mobileInfoBar";

export function Infobar() {
  return (
    <main className="md:max-w-[45vh]">
      <div className="hidden w-full md:block">
        <DesktopInfobar />
      </div>
      <div className="block md:hidden">
        <MobileInfobar />
      </div>
    </main>
  );
}
