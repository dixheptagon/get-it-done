interface DayItem {
  dayName: string;
  dayNum: number;
  fullDate: string;
}

const getWeeklyDates = (): DayItem[] => {
  const currentDate = new Date();
  const days: DayItem[] = [];

  const dayOfWeek = currentDate.getDay();
  const distanceToStartOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const monday = new Date(
    currentDate.setDate(currentDate.getDate() - distanceToStartOfWeek),
  );

  for (let i = 0; i < 10; i++) {
    const nextDay = new Date(monday);
    nextDay.setDate(monday.getDate() + i);

    const dayName = nextDay
      .toLocaleDateString("en-US", { weekday: "short" })
      .toUpperCase();
    const dayNum = nextDay.getDate();
    const fullDate = nextDay.toISOString().split("T")[0];

    days.push({ dayName, dayNum, fullDate });
  }

  return days;
};

export { getWeeklyDates };
export type { DayItem };
