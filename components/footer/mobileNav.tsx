"use client";

import { usePathname } from "next/navigation";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { IoSettingsOutline, IoSettingsSharp, IoAdd } from "react-icons/io5";
import Link from "next/link";
import { MobileTodoFormPanel } from "./todoFormPanel";
import { useState } from "react";
import clsx from "clsx";

const NAVBAR_OPTIONS = [
  {
    name: "Today",
    icon: MdOutlineCalendarToday,
    iconActive: FaCalendar,
    path: "/",
  },
  {
    name: "Settings",
    icon: IoSettingsOutline,
    iconActive: IoSettingsSharp,
    path: "/settings",
  },
];

export function MobileNav() {
  const pathname = usePathname();

  const [isTodoFormPanelOpen, setIsTodoFormPanelOpen] =
    useState<boolean>(false);

  return (
    <main className="">
      <div className="bg-primary-0 fixed bottom-0 z-20 -mx-4 flex w-full items-center justify-around py-3">
        {NAVBAR_OPTIONS.map((option) => {
          const isActive = option.path === pathname;

          return (
            <Link
              href={option.path}
              key={option.name}
              className="cursor-pointer p-1"
            >
              {isActive ? (
                <option.iconActive className="h-5 w-5" />
              ) : (
                <option.icon className="h-5 w-5" />
              )}
            </Link>
          );
        })}
      </div>

      <button
        onClick={() => setIsTodoFormPanelOpen(true)}
        className="bg-primary-800 fixed right-8 bottom-20 z-20 rounded-sm p-2"
      >
        <IoAdd className="text-primary-0 h-6 w-6" />
      </button>

      <button
        onClick={() => setIsTodoFormPanelOpen(false)}
        className={clsx(
          "bg-primary-800/45 fixed top-0 left-0 z-10 min-h-full w-full opacity-0 backdrop-blur-[1.5px] transition-opacity duration-300",
          isTodoFormPanelOpen && "opacity-100",
          !isTodoFormPanelOpen && "pointer-events-none",
        )}
      />

      <MobileTodoFormPanel
        isTodoFormPanelOpen={isTodoFormPanelOpen}
        setIsTodoFormPanelOpen={setIsTodoFormPanelOpen}
      />
    </main>
  );
}
