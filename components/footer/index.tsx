import { MobileNav } from "./mobileNav";

export function Footer() {
  return (
    <main>
      <div className="block md:hidden">
        <MobileNav />
      </div>
    </main>
  );
}
