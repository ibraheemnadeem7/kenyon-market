import { Armchair, Lamp, Microwave, Refrigerator, Shirt, Tv } from "lucide-react";

// Buyer hero visual: a grid of fake listings with price rings and freebies.
const deals = [
  { Icon: Refrigerator, title: "Mini fridge", dorm: "Mather", price: "$28", was: "$55", off: 49, tint: "bg-[#ebe3ff]" },
  { Icon: Lamp, title: "Desk lamp", dorm: "Old Kenyon", price: "Free", was: "$12", off: 100, tint: "bg-[#f6f0ff]" },
  { Icon: Armchair, title: "Bean bag", dorm: "Caples", price: "$15", was: "$25", off: 40, tint: "bg-[#efe7ff]" },
  { Icon: Microwave, title: "Microwave", dorm: "Leonard", price: "$20", was: "$30", off: 33, tint: "bg-[#f6f0ff]" },
  { Icon: Shirt, title: "Winter coat", dorm: "Hanna", price: "Free", was: "$25", off: 100, tint: "bg-[#efe7ff]" },
  { Icon: Tv, title: "Monitor", dorm: "McBride", price: "$45", was: "$60", off: 25, tint: "bg-[#ebe3ff]" },
];

function Ring({ value }: { value: number }) {
  const r = 17;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative size-11 shrink-0 rounded-full bg-white/70">
      <svg viewBox="0 0 44 44" className="size-11 -rotate-90">
        <circle cx="22" cy="22" r={r} fill="none" stroke="rgba(109,40,217,0.12)" strokeWidth="3" />
        <circle cx="22" cy="22" r={r} fill="none" stroke="#6d28d9" strokeWidth="3" strokeDasharray={c} strokeDashoffset={c * (1 - value / 100)} strokeLinecap="round" />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-plum">
        {value === 100 ? "Free" : `-${value}%`}
      </span>
    </div>
  );
}

export function DealCards() {
  return (
    <div className="relative mx-auto mt-16 grid max-w-[1000px] grid-cols-2 gap-4 px-4 pb-4 [mask-image:linear-gradient(to_bottom,black_70%,transparent)] md:grid-cols-3">
      {deals.map(({ Icon, title, dorm, price, was, off, tint }, i) => (
        <div
          key={title}
          className="overflow-hidden rounded-3xl bg-white text-left shadow-[0_20px_40px_rgba(40,20,80,0.10)] ring-1 ring-black/5"
          style={{ transform: `translateY(${[0, 24, 8, 16, 0, 28][i]}px)` }}
        >
          <div className={`relative flex h-32 items-center justify-center sm:h-40 ${tint}`}>
            <Icon className="size-12 text-plum" strokeWidth={1.3} />
            <div className="absolute right-3 top-3">
              <Ring value={off} />
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 p-4">
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-medium text-ink">{title}</p>
              <p className="text-xs text-ink-muted">{dorm}</p>
            </div>
            <div className="text-right">
              <p className={price === "Free" ? "font-display text-sm font-semibold text-plum" : "font-display text-sm font-semibold text-ink"}>
                {price}
              </p>
              <p className="text-[11px] text-ink-faint line-through">{was}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
