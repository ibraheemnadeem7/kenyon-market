import { ArrowRight, Camera, Gift, Lamp, Refrigerator, Sparkles } from "lucide-react";
import Link from "next/link";

// The main page: two big doors, one for sellers and one for buyers.
export function HomeSplit() {
  return (
    <section className="relative -mt-24 bg-[radial-gradient(120%_70%_at_50%_0%,#ece2ff_0%,#f7f2ff_45%,#ffffff_85%)] px-4 pb-20 pt-36 sm:pt-40">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-center text-[15px] text-ink-muted">The move-out market for Kenyon students</p>
        <h1 className="mt-3 text-center font-display text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[52px]">
          What are you here to{" "}
          <span className="font-serif text-[1.08em] font-normal italic tracking-normal">do today?</span>
        </h1>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* Sell */}
          <Link
            href="/sellers"
            className="group relative flex min-h-[480px] flex-col overflow-hidden rounded-[36px] bg-lilac p-8 ring-1 ring-lilac-strong transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(40,20,80,0.12)] sm:p-10"
          >
            <p className="flex items-center gap-2 text-sm font-medium text-plum">
              <Camera className="size-4" /> For sellers
            </p>
            <h2 className="mt-5 max-w-md font-display text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[44px]">
              Sell your stuff from{" "}
              <span className="font-serif text-[1.1em] font-normal italic tracking-normal">a single photo</span>
            </h2>
            <p className="mt-4 max-w-sm text-[16px] leading-relaxed text-ink-muted">
              Snap it, check what the AI wrote, publish. The price drops on its own until it sells.
            </p>

            <div className="mt-8 flex flex-1 items-end justify-center gap-4">
              <div className="w-40 -rotate-6 rounded-3xl bg-white p-3 shadow-[0_20px_40px_rgba(40,20,80,0.10)] transition-transform duration-300 group-hover:-rotate-3">
                <div className="flex h-28 items-center justify-center rounded-2xl bg-[#ebe3ff]">
                  <Lamp className="size-12 text-plum" strokeWidth={1.3} />
                </div>
                <div className="mt-3 space-y-1.5">
                  {["IKEA desk lamp", "$15"].map((v) => (
                    <div key={v} className="flex items-center justify-between rounded-lg bg-mist px-2 py-1 text-[11px] text-ink">
                      {v} <Sparkles className="size-3 text-plum-soft" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-6 w-36 rotate-3 rounded-3xl bg-white p-4 shadow-[0_20px_40px_rgba(40,20,80,0.10)] transition-transform duration-300 group-hover:rotate-6">
                <p className="text-[11px] text-ink-muted">Tonight at 3 am</p>
                <p className="mt-1 font-display text-lg font-semibold text-ink">$40 → $34</p>
                <svg viewBox="0 0 100 40" className="mt-2 h-10 w-full">
                  <path d="M0,6 H25 V14 H50 V22 H75 V32 H100" fill="none" stroke="#6d28d9" strokeWidth="2.5" />
                </svg>
              </div>
            </div>

            <span className="mt-8 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-plum px-6 font-display text-[15px] font-medium text-white transition-colors group-hover:bg-plum-hover">
              Start selling <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>

          {/* Buy */}
          <Link
            href="/buyers"
            className="group relative flex min-h-[480px] flex-col overflow-hidden rounded-[36px] bg-[linear-gradient(160deg,#7c3aed_0%,#6d28d9_45%,#4c1d95_100%)] p-8 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(76,29,149,0.35)] sm:p-10"
          >
            <p className="flex items-center gap-2 text-sm font-medium text-white/80">
              <Gift className="size-4" /> For buyers
            </p>
            <h2 className="mt-5 max-w-md font-display text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[44px]">
              Buy stuff and grab{" "}
              <span className="font-serif text-[1.1em] font-normal italic tracking-normal">free stuff</span>
            </h2>
            <p className="mt-4 max-w-sm text-[16px] leading-relaxed text-white/75">
              Fridges, lamps, rugs and more from students moving out. Cheaper every night, free at the end.
            </p>

            <div className="mt-8 flex flex-1 items-end justify-center gap-4">
              <div className="mb-6 w-36 -rotate-3 rounded-3xl bg-white p-3 text-ink shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:-rotate-6">
                <div className="flex h-24 items-center justify-center rounded-2xl bg-[#ebe3ff]">
                  <Refrigerator className="size-10 text-plum" strokeWidth={1.3} />
                </div>
                <div className="mt-2 flex items-center justify-between px-1">
                  <span className="text-[12px] font-medium">Mini fridge</span>
                  <span className="text-[12px] font-semibold">$28</span>
                </div>
              </div>
              <div className="w-40 rotate-6 rounded-3xl bg-white p-3 text-ink shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:rotate-3">
                <div className="relative flex h-28 items-center justify-center rounded-2xl bg-[#f3ecff]">
                  <Lamp className="size-12 text-plum" strokeWidth={1.3} />
                  <span className="absolute right-2 top-2 rounded-full bg-tag-purple px-2 py-0.5 text-[10px] font-medium">Free</span>
                </div>
                <div className="mt-2 flex items-center justify-between px-1">
                  <span className="text-[12px] font-medium">Desk lamp</span>
                  <span className="rounded-full bg-plum px-2.5 py-0.5 text-[10px] font-medium text-white">Claim</span>
                </div>
              </div>
            </div>

            <span className="mt-8 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-white px-6 font-display text-[15px] font-medium text-plum transition-colors group-hover:bg-lilac">
              Browse deals <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>

        <p className="mt-10 text-center text-sm text-ink-muted">
          Only for <span className="font-semibold text-ink">@kenyon.edu</span> students · Free to use
        </p>
      </div>
    </section>
  );
}
