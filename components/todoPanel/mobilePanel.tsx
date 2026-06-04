const HOURS_LOG = Array.from({ length: 24 }, (_, i) => {
  const hour = `${i}`.padStart(2, "0");
  const minutes = i == 23 ? "59" : "00";

  return `${hour}:${minutes}`;
});

export function MobilePanel() {
  console.log(HOURS_LOG);

  return (
    <main className="mt-48">
      <div className="border-primary-200 divide-primary-200 divide-y-2 border-y-2">
        {HOURS_LOG.map((hour) => (
          <div key={hour} className="font-jetbrains-mono min-h-32 text-sm">
            {hour}
          </div>
        ))}
      </div>
    </main>
  );
}
