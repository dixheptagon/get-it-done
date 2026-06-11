const CurrentTimeTracker = ({
  sectionHeight,
  progress,
}: {
  sectionHeight: number;
  progress: number;
}) => {
  return (
    <div
      className="absolute right-0 left-14 z-5 transition-[top] duration-300 ease-linear"
      style={{ top: `${sectionHeight * progress}px` }}
    >
      <div className="relative">
        <div className="absolute -top-1.25 -left-2 h-3 w-3 rounded-full bg-red-500" />
        <div className="h-[2px] w-full bg-red-500" />
      </div>
    </div>
  );
};

export { CurrentTimeTracker };
