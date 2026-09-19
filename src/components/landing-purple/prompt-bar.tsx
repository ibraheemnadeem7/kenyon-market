"use client";

import { ArrowRight, ArrowUp, Camera } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const ideas = [
  "my mini fridge",
  "a desk lamp I never used",
  "my winter coat",
  "a bean bag before move-out",
  "textbooks from last spring",
];

// Types "I want to sell ..." ideas one letter at a time, like the reference.
function useTypedIdea() {
  const [text, setText] = useState("");
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const r = setTimeout(() => setText(ideas[0]), 0);
      return () => clearTimeout(r);
    }
    let idea = 0;
    let i = 0;
    let deleting = false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = ideas[idea];
      if (!deleting) {
        i++;
        setText(word.slice(0, i));
        if (i === word.length) {
          deleting = true;
          t = setTimeout(tick, 1600);
          return;
        }
        t = setTimeout(tick, 70);
      } else {
        i--;
        setText(word.slice(0, i));
        if (i === 0) {
          deleting = false;
          idea = (idea + 1) % ideas.length;
        }
        t = setTimeout(tick, 30);
      }
    };
    t = setTimeout(tick, 500);
    return () => clearTimeout(t);
  }, []);
  return text;
}

export function PromptBar({ compact = false }: { compact?: boolean }) {
  const typed = useTypedIdea();
  return (
    <Link
      href="/login"
      className={cn(
        "group flex w-full items-center gap-3 rounded-full bg-white p-2 pl-2 ring-1 transition-shadow",
        compact
          ? "max-w-[430px] shadow-[0_10px_30px_rgba(40,20,80,0.12)] ring-black/5"
          : "max-w-[580px] shadow-[0_0_0_6px_rgba(139,92,246,0.08)] ring-plum/25 hover:shadow-[0_0_0_8px_rgba(139,92,246,0.12)]"
      )}
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f1eff5] text-ink-faint">
        <Camera className="size-4" />
      </span>
      <span className="min-w-0 flex-1 truncate text-left font-display text-[15px] text-ink-muted">
        I want to sell {typed}
        <span className="ml-px inline-block w-px animate-pulse bg-ink-muted align-middle">&nbsp;</span>
      </span>
      {compact ? (
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-plum text-white">
          <ArrowUp className="size-4" />
        </span>
      ) : (
        <span className="flex h-11 shrink-0 items-center gap-2 rounded-full bg-plum px-5 font-display text-[15px] font-medium text-white transition-colors group-hover:bg-plum-hover">
          Start now <ArrowRight className="size-4" />
        </span>
      )}
    </Link>
  );
}
