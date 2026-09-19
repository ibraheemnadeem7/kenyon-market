"use client";

import { Fragment, useState } from "react";

import { cn } from "@/lib/utils";

const steps = [
  {
    label: "Snap",
    caption:
      "Take a photo in your room. The listing writes itself: title, category, condition and a fair starting price. You check it and publish.",
  },
  {
    label: "Price",
    caption:
      "Pick how fast the price should fall: hold firm, steady, or fast. Set a floor if you want one.",
  },
  {
    label: "Drop",
    caption:
      "Every night the price steps down on its own. Buyers see the next drop, so nobody waits around to haggle.",
  },
  {
    label: "Free",
    caption:
      "Whatever is left moves to Freebies before move-out. Someone on campus gets it instead of the dumpster.",
  },
];

export function Stepper() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex items-center">
        {steps.map((s, i) => (
          <Fragment key={s.label}>
            {i > 0 && <div className="h-px flex-1 bg-accent-line" />}
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={cn(
                "flex shrink-0 cursor-pointer items-center gap-2 rounded-full border px-3 py-2 text-[15px] transition-colors sm:px-5",
                active === i
                  ? "border-foreground bg-foreground text-background"
                  : "border-accent-line bg-background text-foreground hover:bg-surface-muted"
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
              <span className="hidden sm:inline">{s.label}</span>
            </button>
          </Fragment>
        ))}
      </div>
      <p className="mt-8 min-h-[3.5em] max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
        <span className="font-medium text-foreground sm:hidden">
          {steps[active].label}.{" "}
        </span>
        {steps[active].caption}
      </p>
    </div>
  );
}
