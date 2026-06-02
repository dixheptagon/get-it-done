export function ProgressBar({ progress }: { progress: number }) {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="w-full">
      <div className="w-full h-1.5 bg-primary-300">
        <div
          className="h-full bg-primary-800 transition-all duration-500 ease-out"
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  );
}
