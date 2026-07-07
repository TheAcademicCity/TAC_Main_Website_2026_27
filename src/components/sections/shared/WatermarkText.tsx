import { cn } from "@/lib/utils";

type WatermarkTextProps = {
  lines: string[];
  variant?: "cdf" | "single";
  className?: string;
};

export function WatermarkText({ lines, variant = "single", className }: WatermarkTextProps) {
  if (variant === "cdf") {
    return (
      <div
        className={cn(
          "pointer-events-none absolute left-1/2 top-1/2 z-0 flex -translate-x-1/2 -translate-y-1/2 select-none flex-col items-center",
          className,
        )}
        aria-hidden="true"
      >
        {lines.map((line, index) => (
          <span
            key={line}
            className={cn(
              "font-montserrat font-black leading-[0.88] text-transparent",
              "[-webkit-text-stroke:1.5px_rgba(24,88,80,0.07)]",
              index === 1
                ? "text-[clamp(3rem,7.5vw,7rem)] tracking-[0.12em]"
                : "text-[clamp(5rem,12vw,11rem)] tracking-tight",
            )}
          >
            {line}
          </span>
        ))}
      </div>
    );
  }

  return (
    <span
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none font-montserrat text-[clamp(4rem,14vw,13rem)] font-black tracking-tight text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.04)]",
        className,
      )}
      aria-hidden="true"
    >
      {lines[0]}
    </span>
  );
}
