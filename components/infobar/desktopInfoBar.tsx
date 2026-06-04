"use client";

import { IoMdAdd } from "react-icons/io";
import { ProgressBar } from "./progressBar";
import { MdOutlineSettings, MdOutlineToday } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { WeeklyCalendarDesktop } from "./weeklyCalendar";

const SIDEBAR_OPTIONS = [
  { name: "Today", icon: MdOutlineToday, path: "/" },
  { name: "Settings", icon: MdOutlineSettings, path: "/settings" },
];

export function DesktopInfobar() {
  const pathname = usePathname();

  return (
    <main className="bg-primary-0 -mx-4 -my-2 min-h-screen px-12 py-10">
      <div>
        <h1 className="text-2xl font-bold">Get in Done</h1>
        <span className="text-primary-400 font-semibold">Minimalist Flow</span>
      </div>

      <button className="bg-primary-800 font-jetbrains-mono group mt-15 flex w-full items-center justify-center gap-3 rounded-md py-4 transition-transform hover:scale-105 hover:shadow-md">
        <IoMdAdd className="text-primary-0 text-2xl transition-transform duration-300 group-hover:rotate-90" />
        <span className="text-primary-0 text-sm font-semibold">New Task</span>
      </button>

      <div className="font-jetbrains-mono mt-10 space-y-3 text-sm font-semibold tracking-wide uppercase">
        <div className="flex items-center justify-between">
          <h2 className="text-primary-400">Today&apos;s Progress</h2>
          <span>65%</span>
        </div>
        <ProgressBar progress={65} />
      </div>

      <div className="mt-10 space-y-2">
        {SIDEBAR_OPTIONS.map((option) => {
          const isActive = pathname === option.path;

          return (
            <Link
              href={option.path}
              key={option.name}
              className={clsx(
                "text-primary-400 flex cursor-pointer items-center gap-3 rounded-md px-4 py-4 transition-colors",
                isActive && "text-primary-800 rounded-md bg-neutral-100",
                !isActive && "hover:bg-neutral-100/60",
              )}
            >
              <option.icon className="h-6 w-6" />
              <span className="font-semibold">{option.name}</span>
            </Link>
          );
        })}
      </div>

      <div className="mt-8">
        <WeeklyCalendarDesktop />
      </div>
    </main>
  );
}
