// A static picture of the app for the landing page. Fake data on purpose.

const cards = [
  { bg: "bg-card-peach", where: "Old Kenyon", when: "3 days left", title: "IKEA desk + chair", price: "$40", next: "$32 on Sep 24", off: 20 },
  { bg: "bg-card-blue", where: "Mather", when: "5 days left", title: "Mini fridge", price: "$55", next: "$50 on Sep 23", off: 8 },
  { bg: "bg-card-yellow", where: "Caples", when: "1 day left", title: "Rice cooker", price: "$6", next: "Free on Sep 22", off: 70 },
  { bg: "bg-card-purple", where: "Leonard", when: "4 days left", title: "String lights + mirror", price: "$12", next: "$9 on Sep 25", off: 25 },
];

function Ring({ value }: { value: number }) {
  const r = 18;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative size-11 shrink-0">
      <svg viewBox="0 0 44 44" className="size-11 -rotate-90">
        <circle cx="22" cy="22" r={r} fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="3" />
        <circle
          cx="22"
          cy="22"
          r={r}
          fill="none"
          stroke="#0a0a0a"
          strokeWidth="3"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - value / 100)}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
        <span className="text-[11px] font-semibold">{value}%</span>
        <span className="text-[8px] text-muted-foreground">off</span>
      </div>
    </div>
  );
}

export function FeedPreview() {
  return (
    <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <p className="font-medium">Browse</p>
        <div className="hidden h-8 w-72 items-center rounded-full bg-surface-muted px-4 text-sm text-subtle-foreground sm:flex">
          Search lamps, fridges, rugs...
        </div>
        <span className="rounded-full bg-brand-dark px-3 py-1 text-xs text-white">
          3 active
        </span>
      </div>
      <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.title} className="overflow-hidden rounded-2xl border border-border">
            <div className={`${c.bg} p-4`}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[13px]">{c.where}</p>
                  <p className="text-[12px] text-muted-foreground">{c.when}</p>
                </div>
                <Ring value={c.off} />
              </div>
              <p className="mt-6 text-xl leading-snug">{c.title}</p>
              <p className="mt-3 text-sm">
                <span className="font-semibold">{c.price}</span>
                <span className="text-muted-foreground"> · {c.next}</span>
              </p>
            </div>
            <div className="flex items-center justify-between bg-surface px-4 py-3">
              <span className="text-[13px] text-muted-foreground">@student-4821</span>
              <span className="rounded-full bg-primary px-3 py-1 text-[12px] font-medium text-primary-foreground">
                Claim
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
