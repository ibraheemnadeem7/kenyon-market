"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { PromptBar, sellPrompt, type PromptConfig } from "./prompt-bar";

// The small prompt bar that floats at the bottom once the hero scrolls away.
export function StickyPrompt({ config = sellPrompt }: { config?: PromptConfig }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY > document.body.scrollHeight - 500;
      setShow(window.scrollY > 700 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      aria-hidden={!show}
      className={cn(
        "fixed inset-x-0 bottom-6 z-40 flex justify-center px-4 transition-all duration-300",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <PromptBar compact config={config} />
    </div>
  );
}
