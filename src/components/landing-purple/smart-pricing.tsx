import { Sparkles } from "lucide-react";

const W = 520;
const H = 150;
const prices = [55, 55, 50, 45, 45, 40, 34, 28];
const min = 20;
const max = 60;
const stepW = W / prices.length;
const y = (v: number) => 10 + (1 - (v - min) / (max - min)) * (H - 20);
const path = prices.map((v, i) => `${i === 0 ? "M" : "L"}${i * stepW},${y(v)} H${(i + 1) * stepW}`).join(" ");
const area = `${path} V${H} H0 Z`;

const history = [
  ["Tonight, 3:00 am", "$34 → $28"],
  ["Sep 22, 3:00 am", "$40 → $34"],
  ["Sep 21, 3:00 am", "$45 → $40"],
];

export function SmartPricing() {
  return (
    <section id="pricing" className="mx-auto max-w-[1200px] scroll-mt-28 px-4 py-24 text-center sm:py-32">
      <p className="flex items-center justify-center gap-1.5 font-display text-[18px] text-plum">
        <Sparkles className="size-4 fill-current" /> Smart pricing
      </p>
      <h2 className="mt-4 font-display text-[34px] font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-[48px]">
        Prices drop <span className="text-ink-faint">without you lifting a finger.</span>
      </h2>
      <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-relaxed text-ink-muted">
        Pick hold firm, steady or fast when you list. Every night at 3 am the price steps
        down on its own, and everyone who saved your item gets a heads-up. No reposting,
        no haggling in the group chat.
      </p>

      <div className="mt-14 rounded-[40px] bg-[linear-gradient(135deg,#efe6ff_0%,#f8f4ff_50%,#ece3ff_100%)] p-4 sm:p-12">
        <div className="mx-auto max-w-[900px] overflow-hidden rounded-2xl bg-white text-left shadow-[0_20px_50px_rgba(40,20,80,0.12)] ring-1 ring-black/5">
          <div className="flex items-center gap-1.5 border-b border-black/5 px-4 py-3">
            <span className="size-2.5 rounded-full bg-[#ece8f3]" />
            <span className="size-2.5 rounded-full bg-[#ece8f3]" />
            <span className="size-2.5 rounded-full bg-[#ece8f3]" />
            <span className="ml-3 text-xs text-ink-muted">kenyon-market / listings / mini-fridge</span>
          </div>
          <div className="grid gap-8 p-6 sm:grid-cols-[1.5fr_1fr] sm:p-8">
            <div>
              <p className="font-display text-lg font-semibold text-ink">Mini fridge</p>
              <p className="text-sm text-ink-muted">Mather · Steady curve · ends Sep 30</p>
              <div className="mt-5 flex items-baseline gap-3">
                <span className="font-display text-4xl font-semibold text-ink">$28</span>
                <span className="text-sm text-ink-faint line-through">$55</span>
                <span className="rounded-full bg-lilac px-2.5 py-0.5 text-xs font-medium text-plum">49% off</span>
              </div>
              <svg viewBox={`0 0 ${W} ${H}`} className="mt-6 h-36 w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="plumFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={area} fill="url(#plumFill)" />
                <path d={path} fill="none" stroke="#6d28d9" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">Price history</p>
              {history.map(([when, change]) => (
                <div key={when} className="flex items-center justify-between rounded-xl bg-mist px-4 py-3 text-sm">
                  <span className="text-ink-muted">{when}</span>
                  <span className="font-medium text-ink">{change}</span>
                </div>
              ))}
              <div className="rounded-xl border border-dashed border-lilac-strong px-4 py-3 text-sm text-plum">
                Next drop: $22 tomorrow
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
