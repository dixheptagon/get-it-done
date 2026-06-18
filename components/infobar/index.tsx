import { DesktopInfobar } from "./desktopInfoBar";
import { MobileInfobar } from "./mobileInfoBar";

export function Infobar() {
  return (
    <main className="md:min-w-[48vh]">
      <div className="hidden w-full md:block">
        <DesktopInfobar />
      </div>
      <div className="block md:hidden">
        <MobileInfobar />
      </div>
    </main>
  );
}
