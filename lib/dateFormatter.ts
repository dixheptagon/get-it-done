const formattedDate = (dateString: string) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(date);
};
