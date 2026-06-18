const formattedDate = (dateString: string) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(date);
};

const formatShortDate = (dateString: string) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

const formatDateToString = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const formatDateMonth = (date: Date) => {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${month} ${day}`;
};

const formatTime = (time: Date) => {
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
};

export {
  formattedDate,
  formatDateToString,
  formatDateMonth,
  formatTime,
  formatShortDate,
};
