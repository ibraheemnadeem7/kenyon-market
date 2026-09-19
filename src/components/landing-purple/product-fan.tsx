import { Armchair, BookOpen, Lamp, Refrigerator, Shirt, Sparkles, Tv } from "lucide-react";

// Fanned cards around a phone, like the reference hero. Fake listings.
const left = [
  { Icon: Armchair, title: "Bean bag", price: "$15", dorm: "Caples", tint: "bg-[#efe7ff]" },
  { Icon: BookOpen, title: "Stats textbook", price: "$20", dorm: "Hanna", tint: "bg-[#f6f0ff]" },
  { Icon: Refrigerator, title: "Mini fridge", price: "$50", dorm: "Mather", tint: "bg-[#ebe3ff]" },
];
const right = [
  { Icon: Lamp, title: "Desk lamp", price: "$12", dorm: "Old Kenyon", tint: "bg-[#ebe3ff]" },
  { Icon: Shirt, title: "Winter coat", price: "$25", dorm: "Leonard", tint: "bg-[#f6f0ff]" },
  { Icon: Tv, title: "Monitor", price: "Free", dorm: "McBride", tint: "bg-[#efe7ff]" },
];

function FanCard({
  item,
  side,
  depth,
}: {
  item: (typeof left)[number];
  side: "left" | "right";
  depth: number; // 1 = next to phone, 3 = outermost
}) {
  const { Icon } = item;
  const rot = side === "left" ? 18 + depth * 6 : -(18 + depth * 6);
  return (
    <div
      className="hidden w-40 shrink-0 overflow-hidden rounded-2xl bg-white shadow-[0_20px_40px_rgba(40,20,80,0.12)] ring-1 ring-black/5 sm:block lg:w-44"
      style={{
        transform: `perspective(900px) rotateY(${rot}deg) translateZ(${-depth * 30}px)`,
        marginLeft: side === "left" && depth < 3 ? -28 : undefined,
        marginRight: side === "right" && depth < 3 ? -28 : undefined,
        zIndex: 10 - depth,
      }}
    >
      <div className={`flex h-36 items-center justify-center ${item.tint}`}>
        <Icon className="size-12 text-plum" strokeWidth={1.3} />
      </div>
      <div className="p-3">
        <p className="font-display text-sm font-medium text-ink">{item.title}</p>
        <p className="text-xs text-ink-muted">{item.dorm}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-display text-sm font-semibold text-ink">{item.price}</span>
          <span className="rounded-full bg-plum px-2.5 py-0.5 text-[11px] font-medium text-white">
            Claim
          </span>
        </div>
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="relative z-20 w-52 shrink-0 rounded-[34px] bg-[#1b1726] p-2 shadow-[0_30px_60px_rgba(40,20,80,0.25)] sm:w-56">
      <div className="absolute left-1/2 top-3 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
      <div className="overflow-hidden rounded-[28px] bg-[#f3ecff]">
        <div className="relative flex h-60 items-center justify-center">
          <div className="absolute inset-8 rounded-2xl border-2 border-white/90" />
          <Lamp className="size-20 text-plum" strokeWidth={1.1} />
        </div>
        <div className="space-y-1.5 bg-white p-3">
          {[
            ["Title", "IKEA desk lamp"],
            ["Price", "$15"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between rounded-lg bg-mist px-2.5 py-1.5">
              <span className="text-[11px] text-ink-muted">{k}</span>
              <span className="flex items-center gap-1 text-[12px] font-medium text-ink">
                {v}
                <Sparkles className="size-3 text-plum-soft" />
              </span>
            </div>
          ))}
          <div className="flex h-8 items-center justify-center rounded-full bg-plum text-[12px] font-medium text-white">
            Publish
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductFan() {
  return (
    <div className="relative mt-16 flex items-end justify-center overflow-hidden pb-4 pt-6 [mask-image:linear-gradient(to_bottom,black_75%,transparent)]">
      {[...left].map((item, i) => (
        <FanCard key={item.title} item={item} side="left" depth={3 - i} />
      ))}
      <div className="mx-2">
        <Phone />
      </div>
      {right.map((item, i) => (
        <FanCard key={item.title} item={item} side="right" depth={i + 1} />
      ))}
    </div>
  );
}
