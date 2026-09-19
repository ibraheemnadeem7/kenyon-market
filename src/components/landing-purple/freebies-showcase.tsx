import { Gift } from "lucide-react";

const freebies = [
  ["Rice cooker", "Caples", "Freed 2h ago"],
  ["Hangers x20", "Mather", "Freed 5h ago"],
  ["Shower caddy", "Leonard", "Freed today"],
  ["Poster frames", "Old Kenyon", "Freed today"],
];

export function FreebiesShowcase() {
  return (
    <section id="freebies" className="mx-auto max-w-[1200px] scroll-mt-28 px-4 pb-24 text-center sm:pb-32">
      <p className="flex items-center justify-center gap-1.5 font-display text-[18px] text-plum">
        <Gift className="size-4" /> Freebies
      </p>
      <h2 className="mt-4 font-display text-[34px] font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-[48px]">
        Free stuff, <span className="text-ink-faint">every night before move-out.</span>
      </h2>
      <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-relaxed text-ink-muted">
        When an item hits its end date without selling, it moves to Freebies on its own.
        First to claim it gets it. Turn on freebie alerts and you&apos;ll hear about them first.
      </p>

      <div className="mt-14 rounded-[40px] bg-[linear-gradient(135deg,#efe6ff_0%,#f8f4ff_50%,#ece3ff_100%)] p-4 sm:p-12">
        <div className="mx-auto max-w-[900px] overflow-hidden rounded-2xl bg-white text-left shadow-[0_20px_50px_rgba(40,20,80,0.12)] ring-1 ring-black/5">
          <div className="flex items-center justify-between border-b border-black/5 px-5 py-3">
            <span className="font-display text-sm font-medium text-ink">Freebies</span>
            <span className="rounded-full bg-lilac px-3 py-1 text-xs font-medium text-plum">12 available</span>
          </div>
          <div className="grid gap-3 p-5 sm:grid-cols-2">
            {freebies.map(([title, dorm, when]) => (
              <div key={title} className="flex items-center justify-between rounded-2xl bg-mist px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-ink">{title}</p>
                  <p className="text-xs text-ink-muted">
                    {dorm} · {when}
                  </p>
                </div>
                <span className="rounded-full bg-plum px-3.5 py-1.5 text-xs font-medium text-white">Claim</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
