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

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const getPresentTime = (isEndTime: boolean = false) => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");

  if (isEndTime) {
    const hours = String(now.getHours() + 1).padStart(2, "0");
    if (hours === "23") {
      return "23:59";
    }

    return `${hours}:00`;
  }

  return `${hours}:00`;
};

export { getWeeklyDates, getTodayDate, getPresentTime };
export type { DayItem };
