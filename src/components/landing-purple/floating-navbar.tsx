import Link from "next/link";

import { PurpleLogo } from "./purple-logo";

export function FloatingNavbar() {
  return (
    <div className="sticky top-4 z-40 px-4">
      <header className="mx-auto flex h-16 max-w-[800px] items-center justify-between rounded-full bg-white/95 pl-6 pr-2 shadow-[0_8px_30px_rgba(40,20,80,0.08)] ring-1 ring-black/[0.04] backdrop-blur">
        <div className="flex items-center gap-8">
          <PurpleLogo />
          <nav className="hidden items-center gap-6 font-display text-[15px] text-ink md:flex">
            <Link href="/sellers" className="hover:text-plum">Sell</Link>
            <Link href="/buyers" className="hover:text-plum">Buy</Link>
            <Link href="/buyers#freebies" className="hover:text-plum">Freebies</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden h-12 items-center rounded-full bg-[#efedf3] px-6 font-display text-[15px] font-medium text-ink transition-colors hover:bg-[#e5e2ec] sm:flex"
          >
            Login
          </Link>
          <Link
            href="/login"
            className="flex h-12 items-center rounded-full bg-plum px-6 font-display text-[15px] font-medium text-white transition-colors hover:bg-plum-hover"
          >
            Get started
          </Link>
        </div>
      </header>
    </div>
  );
}
