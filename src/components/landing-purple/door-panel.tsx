"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { cn } from "@/lib/utils";

/**
 * One of the two big "doors" on the home page.
 * Resting: light lilac. Hover, keyboard focus or click: turns dark purple.
 * On click it stays dark for a moment, then opens the page.
 */
export function DoorPanel({
  href,
  eyebrow,
  title,
  body,
  cta,
  children,
}: {
  href: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  body: string;
  cta: string;
  children: React.ReactNode; // the little cards in the middle
}) {
  const router = useRouter();
  const [pressed, setPressed] = useState(false);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Let cmd/ctrl/shift/middle clicks behave normally (new tab, etc.).
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    setPressed(true);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTimeout(() => router.push(href), reduce ? 0 : 280);
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      data-pressed={pressed || undefined}
      className="door group relative isolate flex min-h-[480px] flex-col overflow-hidden rounded-[36px] bg-lilac p-8 ring-1 ring-lilac-strong outline-none transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(76,29,149,0.30)] focus-visible:-translate-y-1 focus-visible:shadow-[0_30px_60px_rgba(76,29,149,0.30)] active:scale-[0.99] data-[pressed]:-translate-y-1 data-[pressed]:shadow-[0_30px_60px_rgba(76,29,149,0.30)] sm:p-10"
    >
      {/* Dark layer that fades in. Gradients can't animate, opacity can. */}
      <span
        aria-hidden="true"
        className="door-dark absolute inset-0 -z-10 bg-[linear-gradient(160deg,#7c3aed_0%,#6d28d9_45%,#4c1d95_100%)] opacity-0 transition-opacity duration-300 motion-reduce:transition-none"
      />

      <p className="door-eyebrow flex items-center gap-2 text-sm font-medium text-plum transition-colors duration-300">
        {eyebrow}
      </p>
      <h2 className="door-title mt-5 max-w-md font-display text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink transition-colors duration-300 sm:text-[44px]">
        {title}
      </h2>
      <p className="door-body mt-4 max-w-sm text-[16px] leading-relaxed text-ink-muted transition-colors duration-300">
        {body}
      </p>

      <div className="mt-8 flex flex-1 items-end justify-center gap-4">{children}</div>

      <span
        className={cn(
          "door-cta mt-8 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-plum px-6 font-display text-[15px] font-medium text-white transition-colors duration-300"
        )}
      >
        {cta} <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
