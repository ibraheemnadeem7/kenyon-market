import { Fragment } from "react";

import { cn } from "@/lib/utils";
import { steps } from "./steps";

// progress runs from 0 (at step 01) to 3 (at step 04).
export function StepPills({
  progress,
  active,
  onSelect,
}: {
  progress: number;
  active: number;
  onSelect?: (i: number) => void;
}) {
  return (
    <div className="flex items-center">
      {steps.map((s, i) => (
        <Fragment key={s.label}>
          {i > 0 && (
            <div className="relative h-px flex-1 bg-accent-line/25">
              <div
                className="absolute inset-y-0 left-0 bg-accent-line"
                style={{ width: `${Math.min(1, Math.max(0, progress - (i - 1))) * 100}%` }}
              />
            </div>
          )}
          <button
            type="button"
            onClick={() => onSelect?.(i)}
            aria-current={active === i ? "step" : undefined}
            className={cn(
              "flex shrink-0 cursor-pointer items-center gap-2 rounded-full border px-5 py-2 text-[15px] transition-colors duration-300",
              active === i
                ? "border-foreground bg-foreground text-background"
                : i < active
                  ? "border-accent-line bg-background text-foreground"
                  : "border-accent-line/40 bg-background text-foreground/60 hover:text-foreground"
            )}
          >
            <span
              className={cn(
                "text-xs",
                active === i ? "text-background/60" : "text-subtle-foreground"
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {s.label}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
