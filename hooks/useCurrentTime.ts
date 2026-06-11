"use client";
import { useEffect, useState } from "react";

export function useCurrentTime(intervalMs = 10000) {
  const [current, setCurrent] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrent(new Date()), intervalMs);
    return () => clearInterval(interval);
  }, [intervalMs]);

  const activeHour =
    current.getHours() === 23
      ? "23:59"
      : current.getHours().toString().padStart(2, "0") + ":00";
  const progress = current.getMinutes() / 60;

  return { current, activeHour, progress };
}
