"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { StepPills } from "./step-pills";
import { steps } from "./steps";

const NAV_HEIGHT = 56; // h-14 navbar
const VH_PER_STEP = 70; // scroll distance per step, in % of screen height

/**
 * "How it works" as a scroll story.
 * Desktop (wide and tall enough): the pills, caption and panels stay pinned
 * while you scroll, and the active step follows the scroll position.
 * Phones and short screens: the four steps simply stack.
 */
export function HowItWorks() {
  return (
    <>
      <PinnedSteps />
      <StackedSteps />
    </>
  );
}

function PinnedSteps() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // 0..3

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = outerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - (window.innerHeight - NAV_HEIGHT);
      if (scrollable <= 0) return;
      const p = Math.min(1, Math.max(0, (NAV_HEIGHT - rect.top) / scrollable));
      // Hold on step 01 for the first eighth and on step 04 for the last eighth.
      setProgress(Math.min(3, Math.max(0, p * 4 - 0.5)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const active = Math.min(3, Math.floor(progress + 0.001));

  const goTo = useCallback((i: number) => {
    const el = outerRef.current;
    if (!el) return;
    const scrollable = el.offsetHeight - (window.innerHeight - NAV_HEIGHT);
    const p = (i + 0.5 + 0.05) / 4;
    const top = window.scrollY + el.getBoundingClientRect().top - NAV_HEIGHT + p * scrollable;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
  }, []);

  return (
    <div
      ref={outerRef}
      className="relative hidden pin-steps:block"
      style={{ height: `calc(100vh + ${VH_PER_STEP * 3}vh)` }}
    >
      <div
        className="sticky flex flex-col justify-center"
        style={{ top: NAV_HEIGHT, height: `calc(100vh - ${NAV_HEIGHT}px)` }}
      >
        <StepPills progress={progress} active={active} onSelect={goTo} />

        <div className="mt-8 grid">
          {steps.map((s, i) => (
            <p
              key={s.label}
              aria-hidden={active !== i}
              className={cn(
                "col-start-1 row-start-1 max-w-2xl text-[17px] leading-relaxed text-muted-foreground transition-opacity duration-300 motion-reduce:transition-none",
                active === i ? "opacity-100" : "opacity-0"
              )}
            >
              {s.caption}
            </p>
          ))}
        </div>

        <div className="mt-8 grid">
          {steps.map(({ label, Panels }, i) => (
            <div
              key={label}
              aria-hidden={active !== i}
              className={cn(
                "col-start-1 row-start-1 transition-all duration-500 ease-out motion-reduce:transition-none",
                active === i
                  ? "translate-y-0 opacity-100"
                  : cn(
                      "pointer-events-none opacity-0",
                      i < active ? "-translate-y-3" : "translate-y-3"
                    )
              )}
            >
              <Panels />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StackedSteps() {
  return (
    <div className="space-y-16 pin-steps:hidden">
      {steps.map(({ label, caption, Panels }, i) => (
        <div key={label}>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-[15px] text-background">
              <span className="text-xs text-background/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              {label}
            </span>
            <div className="h-px flex-1 bg-accent-line/40" />
          </div>
          <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">{caption}</p>
          <div className="mt-6">
            <Panels />
          </div>
        </div>
      ))}
    </div>
  );
}
