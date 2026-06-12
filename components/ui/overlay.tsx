import clsx from "clsx";

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
}
export function Overlay({ isOpen, onClose }: OverlayProps) {
  return (
    <button
      onClick={onClose}
      type="button"
      className={clsx(
        "bg-primary-800/45 fixed top-0 left-0 z-10 min-h-full w-full opacity-0 backdrop-blur-[1.5px] transition-opacity duration-300",
        isOpen && "opacity-100",
        !isOpen && "pointer-events-none",
      )}
      aria-label="Close panel"
    />
  );
}
