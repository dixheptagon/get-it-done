const HOURS_LOG = Array.from({ length: 24 }, (_, i) => {
  const hour = `${i}`.padStart(2, "0");
  const minutes = i == 23 ? "59" : "00";

  return `${hour}:${minutes}`;
});

export { HOURS_LOG };
