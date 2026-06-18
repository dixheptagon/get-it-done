import { useEffect, useRef, useState } from "react";

// hooks/useHourPanelHeights.ts
export function useHourPanelHeights(deps: unknown[]) {
  const hourPanelRef = useRef<Record<string, HTMLDivElement | null>>({});
  const [hourHeightPanel, setHourHeightPanel] = useState<
    Record<string, number>
  >({});

  useEffect(() => {
    const observers: ResizeObserver[] = [];

    Object.entries(hourPanelRef.current).forEach(([hour, element]) => {
      if (!element) return;
      const observer = new ResizeObserver(([entry]) => {
        setHourHeightPanel((prev) => ({
          ...prev,
          [hour]: entry.contentRect.height,
        }));
      });
      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  return { hourPanelRef, hourHeightPanel };
}
