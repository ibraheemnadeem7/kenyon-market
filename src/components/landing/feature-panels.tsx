// Fake numbers for now. Real ones come from the events table later.

const stats = [
  { label: "Listed", value: 47 },
  { label: "Viewed", value: 23 },
  { label: "Claimed", value: 8 },
  { label: "Free", value: 4 },
];

const recent = [
  ["Mini fridge", "Mather", 55],
  ["Desk lamp", "Old Kenyon", 12],
  ["Rug, 5x7", "Caples", 20],
  ["Monitor", "Leonard", 60],
  ["Kettle", "Hanna", 8],
  ["Bookshelf", "McBride", 25],
] as const;

const drops = [
  ["Mini fridge", "drops to $50 tomorrow"],
  ["Rice cooker", "turns free Thu"],
  ["Bean bag", "drops to $15 Fri"],
];

export function FeaturePanels() {
  return (
    <div id="freebies" className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
      <div className="rounded-2xl bg-inverse p-7 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/50">
          01 · The price curve
        </p>
        <h3 className="mt-4 max-w-sm text-[24px] leading-tight tracking-[-0.01em] sm:text-[28px]">
          Prices drop on their own. You do nothing.
        </h3>
        <div className="mt-8 rounded-xl bg-inverse-muted p-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/50">
                  {s.label}
                </span>
                <span className="text-xl">{s.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {recent.map(([title, dorm, price]) => (
              <div key={title} className="rounded-lg border border-white/10 px-3 py-2">
                <p className="text-sm">{title}</p>
                <p className="truncate text-xs text-white/50">
                  {dorm} · ${price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-subtle-foreground">
          02 · Coming up
        </p>
        <h3 className="mt-4 text-[24px] leading-tight tracking-[-0.01em]">
          Drops this week.
        </h3>
        <div className="mt-8 space-y-2 rounded-xl bg-surface-muted p-3">
          {drops.map(([title, when]) => (
            <div key={title} className="rounded-lg border border-border bg-surface px-4 py-3">
              <p className="text-sm font-medium">{title}</p>
              <p className="text-xs text-subtle-foreground">{when}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
