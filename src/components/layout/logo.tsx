import Link from "next/link";

import { cn } from "@/lib/utils";

// The mark is a falling staircase: a price that steps down over time.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("size-6", className)}
    >
      <rect width="24" height="24" rx="6" className="fill-foreground" />
      <path
        d="M5.5 7H10V11.5H14V15.5H18.5"
        className="stroke-background"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  href = "/",
  className,
}: {
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("flex items-center gap-2.5 text-lg font-medium", className)}
    >
      <LogoMark />
      <span>Kenyon Market</span>
    </Link>
  );
}
