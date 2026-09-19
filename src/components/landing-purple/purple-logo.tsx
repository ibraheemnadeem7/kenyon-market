import Link from "next/link";

export function PurpleLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-display text-[17px] font-semibold tracking-tight text-ink">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-6">
        <rect width="24" height="24" rx="7" className="fill-plum" />
        <path d="M5.5 7H10V11.5H14V15.5H18.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>
        Kenyon<span className="text-plum">Market</span>
      </span>
    </Link>
  );
}
